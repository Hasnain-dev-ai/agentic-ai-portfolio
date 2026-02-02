// scripts/index_algolia.ts
import { algoliasearch } from 'algoliasearch';
import fs from 'fs';
import path from 'path';

// Manually load and parse .env.local file
function loadEnvFile(): { [key: string]: string } {
  const envPath = path.resolve(process.cwd(), '.env.local');
  const envVars: { [key: string]: string } = {};
  
  try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const lines = envContent.split('\n');
    
    lines.forEach(line => {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith('#') && trimmedLine.includes('=')) {
        const [key, ...valueParts] = trimmedLine.split('=');
        const value = valueParts.join('=').trim();
        envVars[key.trim()] = value;
        // Also set in process.env
        process.env[key.trim()] = value;
      }
    });
    
    console.log('Manually loaded environment variables:');
    Object.keys(envVars).forEach(key => {
      if (key.includes('ALGOLIA')) {
        console.log(`${key}: ${key.includes('KEY') ? 'Found' : envVars[key]}`);
      }
    });
    
    return envVars;
  } catch (error) {
    console.error('Error reading .env.local:', error);
    return {};
  }
}

// Load environment variables
const envVars = loadEnvFile();

// Define a type for your Algolia records for type safety
interface AlgoliaRecord extends Record<string, unknown> {
  objectID: string;
  type: string;
  title: string;
  description: string;
  url: string;
  keywords?: string[];
  content_snippet?: string;
  tags?: string[];
  technologies?: string[];
  author?: string;
  category?: string;
  date?: string; // For blog posts
  proficiency?: string; // For skills
  // Add any other fields you have in your JSON data
}

const ALGOLIA_APP_ID = envVars.NEXT_PUBLIC_ALGOLIA_APP_ID || process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const ALGOLIA_WRITE_API_KEY = envVars.ALGOLIA_WRITE_API_KEY || process.env.ALGOLIA_WRITE_API_KEY;
const ALGOLIA_INDEX_NAME = envVars.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || 'portfolio';

console.log('\nFinal values:');
console.log('ALGOLIA_APP_ID:', ALGOLIA_APP_ID || 'MISSING');
console.log('ALGOLIA_WRITE_API_KEY:', ALGOLIA_WRITE_API_KEY ? 'Found' : 'MISSING');
console.log('ALGOLIA_INDEX_NAME:', ALGOLIA_INDEX_NAME);

if (!ALGOLIA_APP_ID || !ALGOLIA_WRITE_API_KEY) {
  console.error("\nAlgolia APP ID or WRITE API Key is missing. Please check your .env.local file or environment variables.");
  process.exit(1);
}

// Create client with v5 syntax
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_WRITE_API_KEY);

// Path to your JSON data file
const recordsFilePath = path.resolve(__dirname, 'algolia_records.json');

async function pushToAlgolia() {
  try {
    const recordsData = fs.readFileSync(recordsFilePath, 'utf8');
    const records: AlgoliaRecord[] = JSON.parse(recordsData);

    console.log(`Starting Algolia indexing for index: ${ALGOLIA_INDEX_NAME}`);
    console.log(`Number of records to index: ${records.length}`);

    // OPTIONAL: Clear the index before adding new objects (good for full re-indexing)
    console.log('Clearing existing index objects...');
    await client.clearObjects({
      indexName: ALGOLIA_INDEX_NAME
    });
    console.log('Index cleared.');

    // Add records to Algolia
    const response = await client.saveObjects({
      indexName: ALGOLIA_INDEX_NAME,
      objects: records
    });
    
    // In v5, the response is an array of BatchResponse objects
    const totalObjects = response.reduce((sum, batch) => sum + batch.objectIDs.length, 0);
    console.log(`Successfully indexed ${totalObjects} records to Algolia!`);

    // Configure Algolia index settings for optimal search
    console.log('Setting Algolia index configurations...');
    await client.setSettings({
      indexName: ALGOLIA_INDEX_NAME,
      indexSettings: {
        searchableAttributes: [
          'title',
          'keywords',
          'description',
          'content_snippet',
          'tags',
          'technologies',
          'author',
          'type',
          'category',
          'proficiency'
        ],
        attributesToRetrieve: [
          'objectID',
          'title',
          'description',
          'url',
          'type',
          'category',
          'tags',
          'author',
          'date',
          'proficiency'
        ],
        attributesToHighlight: [
          'title',
          'description',
          'content_snippet',
          'keywords',
          'tags',
          'technologies'
        ],
        customRanking: [
          'asc(type)',
          'desc(date)',
          'asc(title)'
        ],
      }
    });
    console.log('Algolia index settings updated.');

  } catch (error) {
    if (error instanceof Error) {
      console.error('Error pushing data to Algolia:', error.message);
    } else {
      console.error('An unknown error occurred:', error);
    }
    process.exit(1);
  }
}

pushToAlgolia();