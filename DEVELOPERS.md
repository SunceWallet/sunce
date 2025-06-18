# Technical overview and roadmap

## Short technical overview

Sunce consists of three modules:
- web part. It is a web application, written in Typescript and React with customized Material UI component library. The app extensively uses web workers to offload communication with Stellar blockchain. Can be deployed on the web server and used in browser (https://sunce.app). It has separate adapters (IPC) to a platform-specific functionality.
- cordova module. Thin wrapper around web part allowing to produce Android and iOS apps
- electron module. Wrapper around web part allowing to produce desktop applications (Linux, Windows, MacOS)

## Long technical overview

To be done.

https://deepwiki.com/SunceWallet/sunce

## Roadmap

- [x] tx spam filtering
- [x] address book
- [x] custom assets
- [x] support web+stellar links (SEP-07)
- [ ] advanced assets management
- [ ] add support for swaps
- [ ] UI for liquidity pool management
- [ ] implement SEP-19 and test interopability with other multisig providers (Specifically https://eurmtl.me/sign_tools and Stellarguard)
- [ ] SEP-10 and browser extension for signing
- [ ] better UI for trading: show markets, orderbooks, trades by pair etc
- [ ] UI to create payment requests
- [ ] data entries editor
- [ ] improve speed and stability
- [ ] Soroban support
