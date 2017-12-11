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
			'HELP': ['<say-as interpret-as="interjection">Moin</say-as>. Du kannst mich nach den Abfahrtszeiten der Bahnen des KVV fragen. ' +
				'Sage hierfür: Abfahrtszeiten. Oder: Wann fährt die nächste Bahn? Wenn du den Stationsnamen nicht bei jeder Anfrage angeben möchtest, ' +
				'dann kannst du deine Standard Station festlegen. Sage hierfür: Standard Station festlegen.'],
			'UNHANDLED': ['Leider ist bei der Verarbeitung deiner Anfrage ein Fehler aufgetreten.'],
			'DEPARTURE': ['Von welcher Station möchtest du losfahren?'],
			'STANDARD_STOP': ['Welche Station soll ich als deine Standard Station festlegen?'],
			'STOP_INTENT_ANSWER': ['<say-as interpret-as="interjection">Alles klar,</say-as> du möchtest von der Station <break strength="medium"/> %s losfahren. Mit welcher Linie möchtest du fahren?'],
			'STOP_INTENT_ANSWER_REPROMPT': ['Nenne mir die Linie, mit der du fahren möchtest.'],
			'STOP_INTENT_ANSWER_NO_DEPARTURES': ['Leider fahren im Moment keine Bahnen von der Station %s.'],
			'STOP_INTENT_HELP': [
				'<p>Um die aktuellen Abfahrtszeiten zu erhalten, musst du mir den Namen einer Station nennen. ' +
				'Bitte gebe den Namen der Station dabei exakt an. Bei einer Angabe wie zum Beispiel Europaplatz kann ich ansonsten nicht entscheiden, ' +
				'ob du Europaplatz Sparkstraße oder Kaiserstraße meinst. Den Städtenamen musst du nicht angeben.</p>' +
				'Aktuell sind nicht alle Stationen des gesamten Liniennetzes verfügbar. Aber mein Entwickler arbeitet daran, weitere Stationen nachzutragen. ' +
				'Ich hoffe, ich konnte dir mit dieser Information weiterhelfen.'
			],
			'STANDARD_STOP_ANSWER': [
				'<say-as interpret-as="interjection">Alles klar</say-as>, ich trage Buxtehude als deine Standard Station ein.<break time="1s"/>' +
				'<say-as interpret-as="interjection">War nur ein Scherz.</say-as> Ich habe %s verstanden. Ist das richtig?'
			],
			'STANDARD_STOP_UNKNONW_STOP': ['Entschuldige, diese Station ist mir leider unbekannt. Nenne mir bitte erneut deine Station.'],
			'STANDARD_STOP_UNKNONW_STOP_REPROMPT': ['Welche Station möchtest du als deine Standard Station festlegen?'],
			'STANDARD_STOP_YES': [
				'<say-as interpret-as="interjection">Prima</say-as>, ist erledigt.',
				'<say-as interpret-as="interjection">Okey dokey</say-as>, ist erledigt.',
			],
			'STANDARD_STOP_NO': ['<say-as interpret-as="interjection">Mist.</say-as> Welche Station meintest du dann?'],
			'STANDARD_STOP_HELP': [
				'Mit dieser Funktion kann ich deine Standard Station speichern. Wenn du deine Standard Station festlegst, kannst du mir zukünftig direkt ' +
				'folgende Frage stellen: <break time="0.5s"/>Wann fährt die nächste S5? Ich werde dann automatisch deine gespeicherte Station auswählen.'
			],
			'ROUTE_HANDLER_UNKNOWN_ROUTE': ['Entschuldige, diese Linie ist mir leider nicht bekannt. Mit welcher Linie möchtest du fahren?'],
			'ROUTE_HANDLER_UNKNOWN_ROUTE_REPROMT': ['Bitte nenne die gewünschte Linie erneut.'],
			'ROUTE_HANDLER_HELP': [
				'Damit ich für dich relevante Abfahrtszeiten nennen kann, benötige ich die entsprechende Tram oder S-Bahn-Linie. ' +
				'Nenne mir einfach den Namen der Linie, wie z.B. <break time="0.1s"/> drei <break time="0.2s"/> oder <break time="0.2s"/> S51. ' +
				'Da ich davon ausgehe, dass du nicht direkt neben der Haltestelle wohnst, nenne ich dir keine Bahnen, die in weniger als zwei Minuten abfahren.' +
				'Manchmal kann es vorkommen, dass ich eine Linie noch nicht kenne. <say-as interpret-as="interjection">Aber keine Sorge</say-as>, mein Entwickler arbeitet daran, weitere Tram und S-Bahn-Linien nachzutragen.'
			],
		}
	}
}