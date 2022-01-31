require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net pumpkin install infant fortune stove'; 
let testAccounts = [
"0x3ae7de02c9ead28a142ff7f6ede29e519af74094ba17e7651ec4bbaff08f34a0",
"0xeea4b27f53b6508a0967c909f5fb1210eae654bfdd4e7cf744007308d498b870",
"0xc7579c66b2058f4503a39d6079693fe318f46011976355f38be3fcb442fc7bdb",
"0xe4460a43f4357495d1df8e6e4ba490c74eebc86315beaf462e68691fdcb9313a",
"0xfb4003a29379e1069b34a39899fdb80d8536d32e6bbb937c88cd7dfa16369196",
"0x7edc61467ff266fb88ae9087a07a74ff6af623b999b8061e4e0ca18e8288aafe",
"0xd4d5283ba909d0426e4d428337493f5507f14d9620bf52393296ef5e9176f3f3",
"0x17b3e55a6ef2a1fcff71c72575adcd671842561b3672b065b917f2b759eeea75",
"0x88efef44d65a74c06c6e7426a8ed725e469231e99807a0a0d5288f4ffe793fd5",
"0x15160d78f815ee47247df3b4c8f31dfa5bf592123bcc805ff13fea8c0502f461"
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

