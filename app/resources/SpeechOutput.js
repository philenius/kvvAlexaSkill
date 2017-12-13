'use strict';

module.exports = {
	'en-US': {

	},
	'de-DE': {
		'translation': {
			'WELCOME': ['<say-as interpret-as="interjection">Willkommen</say-as> beim KVV. Wie kann ich dir weiterhelfen?'],
			'WELCOME_REPROMPT': ['Sage <break strength="medium"/>was kann ich fragen, wenn du Hilfe benötigst.'],
			'STOP': [
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
			'CANCEL': ['<say-as interpret-as="interjection">Bis bald.</say-as>'],
			'HELP': [
				'<say-as interpret-as="interjection">Moin</say-as>. Du kannst mich nach den Abfahrtszeiten der Bahnen des KVV fragen. ' +
				'Sage hierfür: Abfahrtszeiten. Oder: Wann fährt die nächste Bahn? Du kannst auch direkt sagen: Wann fährt die nächste S51 von Hauptbahnhof Vorplatz?'
			],
			'UNHANDLED': ['Leider ist bei der Verarbeitung deiner Anfrage ein Fehler aufgetreten.'],
			'DEPARTURE': ['Von welcher Haltestelle möchtest du losfahren?'],
			'STOP_HANDLER_UNKNOWN_STOP': ['Entschuldige, diese Haltestelle ist mir leider nicht bekannt. Von welcher Haltestelle möchtest du losfahren?'],
			'STOP_HANDLER_UNKNOWN_STOP_REPROMPT': ['Bitte nenne die gewünschte Haltestelle erneut.'],
			'STOP_HANDLER_ANSWER': ['<say-as interpret-as="interjection">Alles klar,</say-as> du möchtest von der Haltestelle <break strength="medium"/> %s losfahren. Mit welcher Linie möchtest du fahren?'],
			'STOP_HANDLER_ANSWER_REPROMPT': ['Nenne mir die Linie, mit der du fahren möchtest.'],
			'STOP_HANDLER_ANSWER_NO_DEPARTURES': ['Leider fahren im Moment keine Bahnen von der Haltestelle %s.'],
			'STOP_HANDLER_HELP': [
				'<p>Um die aktuellen Abfahrtszeiten zu erhalten, musst du mir den Namen einer Haltestelle nennen. ' +
				'Bitte gebe den Namen der Haltestelle dabei exakt an. Bei einer Angabe wie zum Beispiel Europaplatz kann ich ansonsten nicht entscheiden, ' +
				'ob du Europaplatz Sparkstraße oder Kaiserstraße meinst. Den Städtenamen musst du nicht angeben.</p>' +
				'Aktuell sind nicht alle Haltestellen des gesamten Liniennetzes verfügbar. Aber mein Entwickler arbeitet daran, weitere Haltestellen nachzutragen. ' +
				'Ich hoffe, ich konnte dir mit dieser Information weiterhelfen.'
			],
			'ROUTE_HANDLER_UNKNOWN_ROUTE': ['Entschuldige, diese Linie ist mir leider nicht bekannt. Mit welcher Linie möchtest du fahren?'],
			'ROUTE_HANDLER_UNKNOWN_ROUTE_REPROMT': ['Bitte nenne die gewünschte Linie erneut.'],
			'ROUTE_HANDLER_HELP': [
				'Damit ich für dich relevante Abfahrtszeiten nennen kann, benötige ich die entsprechende Tram oder S-Bahn-Linie. ' +
				'Nenne mir einfach den Namen der Linie, wie z.B. <break time="0.1s"/> drei <break time="0.2s"/> oder <break time="0.2s"/> S51. ' +
				'Da ich davon ausgehe, dass du nicht direkt neben der Haltestelle wohnst, nenne ich dir keine Bahnen, die in weniger als zwei Minuten abfahren.' +
				'Manchmal kann es vorkommen, dass ich eine Linie noch nicht kenne. <say-as interpret-as="interjection">Aber keine Sorge</say-as>, mein Entwickler arbeitet daran, weitere Tram und S-Bahn-Linien nachzutragen.'
			],
			'DIRECT_DEPARTURE_HANDLER_UNKNOWN_STOP': ['Entschuldige, diese Haltestelle ist mir leider nicht bekannt.'],
			'DIRECT_DEPARTURE_HANDLER_UNKNOWN_ROUTE': ['Entschuldige, diese Linie ist mir leider nicht bekannt.'],
		}
	}
}