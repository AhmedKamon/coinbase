import SanityClient from '@sanity/client';

export const client = SanityClient({
  projectId: '15cp66kw',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skG2R6cDIyf8TO1LFlvLWOM0IIH44XlVlx2XQc0UQPBpDowoX6EG02gWymVfdHtyQcyPsAWjxYbSCzEm7AiN3Ai6K1cT1A70pSXdh3s9mBXDY1ZcqxHqttssXQwvVP8ZMoZZynbNwZgRaeECxYVuIjtLIMNAfmNl798LW5kWhALIDYqjgd19',
  useCdn: false,
});
