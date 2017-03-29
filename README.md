# Pig-latin Generator

#### converts user input to pig-latin, 03.29.2017

#### By Ben Petrosky and Zach Bastian

## Description

_{This website converts sentence strings from English to Pig Latin.}_

## Specifications

_{The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.}_

* _Example Input: 3_
* _Example Output: 3_

_{The program adds "ay" to single-letter words beginning with a vowel.}_

* _Example Input: i_
* _Example Output: iay_

_{The program does not add "ay" to single letter entries beginning with a consonant}_

* _Example Input: w_
* _Example Output: w_

_{The program adds "ay" to multiple-lettered words beginning with a vowel.}_

* _Example Input: apple_
* _Example Output: appleay_

_{The program removes the beginning consonant and adds "ay" to the end of multiple-lettered words beginning with a single consonant then followed by a vowel.}_

* _Example Input: dip_
* _Example Output: ipday_

_{The program removes beginning consonants and adds the consonants and "ay" to multiple-lettered entries beginning with a series of consonants}_

* _Example Input: chip_
* _Example Output: ipchay_

_{If first consonants include "qu", it will move the "u" along with the "q" and add "ay", treating "qu" as one consonant.}_

* _Example Input: quark_
* _Example Output: arkquay_

_{If "qu" doesn't come first, move first consonant to end.  Keep "qu" at beginning.}_

* _Example Input: squeak_
* _Example Output: queaksay_

_{The program converts multiple word entries into Pig-latin.}_

* _Example Input: the dog ran down the street._
* _Example Output: ethay ogday anray ownday ethay eetstray_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**
