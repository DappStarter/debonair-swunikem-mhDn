require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remind humble install infant food slender'; 
let testAccounts = [
"0xec360cdb003652f9601c989d8793bf3fb7bba69cd0781d859ffdb1398ec15d46",
"0x9ec2356834fc98746cf358b06ffa87f782cf88a6de9a7681b0b896c062c54c6e",
"0x3aca76fa0f95bfae85d529a7c1334866a1091f7d265b667c97d16faf8cecb36a",
"0xbab39a0cb6ff278211a4dd27c82e08ff7b4bab78b71ce9077ad5971f466e9ab6",
"0x70cd42706f27bee4c793165cf08228289743b0566cd798b2ae573d8f3febe2c8",
"0x9cee6c38fcaa9d557b18928a0a311bd9a8871bc2a3d012bcec21afaa292879f1",
"0x28cdec7c2c41b508db225e871e079eab4703af442d53079fd6d1d62577ddf1e1",
"0xd8dee2eddb7bfad4720106df8993bb5cbd826c1a72fb387283a5799e598929d9",
"0x2b6ab46655946f94f4fc418e905287cedbc5753d72aebcaf678dd9f82261f2be",
"0xdcee516ab2a57d425beee9e30cf75bc0c2228995e6aab73516f3a2d910d5af84"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

