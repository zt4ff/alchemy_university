## What is blockchain

The purpose of blockchain is to have a network of computers agree upon a common state of data. Any person or organization should be able to be a part of this process and no one should be able to control this process. 

> The term consensus is used to describe a network coming to an agreement of the state of a data.
> 

A digital currency system would need this basic MVP:

- holder can trust currency
- holders can make transactions
- holders can view the balance

While the second and third option is very possible with programming skills, the issue of trust stills pends over traditional systems. For a while developers knows the solution hover around cryptographic algorithms, so Satoshi released a while paper for Bitcoin and blockchain was invented to tie a network together to reach a cryptographic agreement.

### Smart Contract Blockchains

Provides developers a way to decentrialize where the code runs

---

## Cryptography historically

Up until the 1970s, cryptography was encrypting message so they can not decrypted even when intercepted. Over the years to include more complex functions that encrypt and decrypt message based on a secret key.

So people would have to meet to exchange the secret key to communicate. What if I want to communicate with stranger?

Someone came up with an ideas to have both private and public keys. So I can sign messages with the private key and share my public key so people can decrypt the message.

### RSA and ECDSA

are both popular algorithm for public key cryptography.

- RSA: is based on the idea that is is easy to find the product of two prime numbers but difficult to factor out the numbers that made the product
- ECDSA: uses eliptic curves. (Elliptic Curve Digital Signing Algorithm) is what is in use by Bitcoin