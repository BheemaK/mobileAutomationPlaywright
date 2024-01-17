import dotenv from "dotenv";

dotenv.config({
  path: `.env`
});

const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

const credential = new DefaultAzureCredential();

// Key Vault Specific Parameters from .env
//const vaultName = process.env.KEYVAULT_NAME;
const vaultName = 'ElectrifyNowKeyVault';
const url = `https://${vaultName}.vault.azure.net`;
console.log(url);
const client = new SecretClient(url, credential);
console.log(client);
const secret_name = 'DBconnectionstring';
const secretbody = await client.getSecret(secret_name);
console.log(secretbody.value);

// Try fetch Secrets from Key Vault or throw error
//export async function getSecrets(secret_name: string) {
  //try {
    //const secretbody = await client.getSecret(secret_name)
    //console.log(secretbody.value);
    //console.log("dsds", +secretbody.value);
    //return (secretbody.value)
  //} catch (error) {
    //console.error(error)
    //throw error
  //}
//}