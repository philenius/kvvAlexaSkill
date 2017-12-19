# KVV Alexa Skill

This repository contains an Amazon Alexa Skill which let's you ask for realtime information about KVV trains and trams.

## User Interaction

### Ask for relatime departures using a dialog model

> User:
* `Wann fährt die nächste Bahn?`  
oder
* `Ich möchte wissen, wann die nächste Bahn fährt.`  
oder
* `Abfahrtszeiten.`

> Alexa:
* `Von welcher Haltestelle möchtest du losfahren?`

> User:
* `Von Hauptbahnhof Vorplatz.`  
oder
* `Von der Yorckstraße.`  
oder
* `Vom Kolpingplatz.`  
oder
* `Karlstor`

> Alexa:
* `Mit welcher Linie möchtest du fahren?`

> User:
* `Mit der 6.`  
oder
* `S51`.

### Ask directly for realtime departures

* `Wann fährt die nächste 2 von Europaplatz Kaiserstraße?`
* `Wann fährt die S5 von Knielingen Siemens?`

### Set a standard stop

You can set a standad stop so that you don't have to tell Alexa from which stop you want to start.
* `Standard Haltestelle festlegen.`  
oder
* `Lege meine Standard Haltestelle fest.`  
oder
* `Ich möchte meine Standard Station festlegen.` 

After having set your standard stop, you can ask Alexa:
* `Wann fährt die nächste S11?`  
Alexa will then remember you standard stop and will retrieve the corresponding realtime departures.

## Missing stops

Alexa told you that she doesn't know your stop? If you're missing a stop in / around Karlsruhe, then give me a review on Amazon and tell me about the missing stop(s). Or you can simply create an issue or a pull request on Github. Thank you.