/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    rinkeby: {
      provider: function() {
        const mnemonic = readFileSync(path.join(__dirname, 'rinkeby_mnemonic'), 'utf-8')
        if (!process.env.INFURA_API_KEY) {
          throw new Error("INFURA_API_KEY env var not set")
        }
        return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/${process.env.INFURA_API_KEY}`, 0, 10)
      },
      network_id: 4,
      gasPrice: 15000000001,
      skipDryRun: true
    },
    development: {
      host: 'localhost',
        port: 8545,
        network_id: '*', // Match any network id
        gas: 6000000
    }
  }
};
