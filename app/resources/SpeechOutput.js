'use strict';

module.exports = {
	'en-US': {

	},
	'de-DE': {
		'translation': {
			'WELCOME': ['<say-as interpret-as="interjection">Willkommen</say-as> beim KVV. Wie kann ich dir weiterhelfen?'],
			'WELCOME_REPROMPT': ['Sage <break strength="medium"/>was kann ich fragen, wenn du Hilfe benötigst.'],
			'STOP_ANSWER': [
				'<say-as interpret-as="interjection">bis dann.</say-as>',
				'<say-as interpret-as="interjection">bis bald.</say-as>',
				'<say-as interpret-as="interjection">tschüss.</say-as>',
				'<say-as interpret-as="interjection">ade.</say-as>',
				'<say-as interpret-as="interjection">bon voyage.</say-as>',
				'<say-as interpret-as="interjection">gute reise.</say-as>',
				'<say-as interpret-as="interjection">mach\'s gut.</say-as>',
				'<say-as interpret-as="interjection">schade.</say-as>',
				'<say-as interpret-as="interjection">tschö.</say-as>',
			],
			'CANCEL_ANSWER': ['<say-as interpret-as="interjection">Bis bald.</say-as>'],
			'HELP_ANSWER': ['<say-as interpret-as="interjection">Moin</say-as>. Du kannst mich nach den Abfahrtszeiten der Bahnen des KVV fragen. ' +
				'Sage hierfür: Abfahrtszeiten. Oder: Wann fährt die nächste Bahn? Wenn du den Stationsnamen nicht bei jeder Anfrage angeben möchtest, ' +
				'dann kannst du deine Standard Station festlegen. Sage hierfür: Standard Station festlegen.'],
			'UNHANDLED': ['Leider ist bei der Verarbeitung deiner Anfrage ein Fehler aufgetreten.'],
			'DEPARTURE': ['Von welcher Station möchtest du losfahren?'],
			'STOP_INTENT_HELP_ANSWER': [
				'<p>Um die aktuellen Abfahrtszeiten zu erhalten, musst du mir den Namen einer Station nennen. ' +
				'Bitte gebe den Namen der Station dabei exakt an. Bei einer Angabe wie zum Beispiel Europaplatz kann ich ansonsten nicht entscheiden, ' +
				'ob du Europaplatz Sparkstraße oder Kaiserstraße meinst. Den Städtenamen musst du nicht angeben.</p>' +
				'Aktuell sind nicht alle Stationen des gesamten Liniennetzes verfügbar. Aber mein Entwickler arbeitet daran, weitere Stationen nachzutragen. ' +
				'Ich hoffe, ich konnte dir damit weiterhelfen.'
			]
		}
	}
}