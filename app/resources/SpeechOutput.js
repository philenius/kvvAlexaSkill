'use strict';

module.exports = {
	'en-US': {

	},
	'de-DE': {
		'translation': {
			'WELCOME': ['<say-as interpret-as="interjection">Willkommen</say-as> beim KVV. Wie kann ich dir weiterhelfen?'],
			'WELCOME_REPROMPT': ['Sage <break strength="medium"/>was kann ich fragen, wenn du Hilfe benötigst.'],
			'STOP': [
				'<say-as interpret-as="interjection">Bis dann.</say-as>',
				'<say-as interpret-as="interjection">Bis bald.</say-as>',
				'<say-as interpret-as="interjection">Tschüss.</say-as>',
				'<say-as interpret-as="interjection">Ade.</say-as>',
				'<say-as interpret-as="interjection">Bon voyage.</say-as>',
				'<say-as interpret-as="interjection">Gute reise.</say-as>',
				'<say-as interpret-as="interjection">Mach\'s gut.</say-as>',
				'<say-as interpret-as="interjection">Schade.</say-as>',
				'<say-as interpret-as="interjection">Tschö.</say-as>',
			],
			'CANCEL': [
				'<say-as interpret-as="interjection">Bis dann.</say-as>',
				'<say-as interpret-as="interjection">Bis bald.</say-as>',
				'<say-as interpret-as="interjection">Tschüss.</say-as>',
				'<say-as interpret-as="interjection">Ade.</say-as>',
				'<say-as interpret-as="interjection">Bon voyage.</say-as>',
				'<say-as interpret-as="interjection">Gute reise.</say-as>',
				'<say-as interpret-as="interjection">Mach\'s gut.</say-as>',
				'<say-as interpret-as="interjection">Schade.</say-as>',
				'<say-as interpret-as="interjection">Tschö.</say-as>',
			],
			'HELP': [
				'<say-as interpret-as="interjection">Moin</say-as>. Du kannst mich nach den Abfahrtszeiten der Bahnen des KVV fragen. ' +
				'Sage hierfür: Abfahrtszeiten. Oder: Wann fährt die nächste Bahn? Du kannst auch direkt sagen: Wann fährt die nächste S51 von Hauptbahnhof Vorplatz?' +
				'<p>Wenn du nicht bei jeder Anfrage die Haltestelle angeben möchtest, dann kannst du eine Haltestelle als deinen Standard ' +
				'festlegen. Sage hierfür: Setze meine Standard Haltestelle.</p>' +
				'<p>Ich hoffe, ich konnte dir mit diesen Informationen weiterhelfen. <say-as interpret-as="interjection">Bis dann.</say-as></p>'
			],
			'UNHANDLED': ['Leider ist bei der Verarbeitung deiner Anfrage ein Fehler aufgetreten.'],
			'HOW_CAN_I_HELP_YOU': ['Wie kann ich dir noch behilflich sein?'],
			'DEPARTURE': ['Von welcher Haltestelle möchtest du losfahren?'],
			'STANDARD_STOP': ['Welche Haltestelle soll ich als deine Standard Haltestelle festlegen?'],
			'STOP_HANDLER_UNKNOWN_STOP': ['Entschuldige, diese Haltestelle ist mir leider nicht bekannt. Von welcher Haltestelle möchtest du losfahren?'],
			'STOP_HANDLER_UNKNOWN_STOP_REPROMPT': ['Bitte nenne die gewünschte Haltestelle erneut.'],
			'STOP_HANDLER_ANSWER': ['<say-as interpret-as="interjection">Alles klar,</say-as> du möchtest von der Haltestelle <break strength="medium"/> %s losfahren. Mit welcher Linie möchtest du fahren?'],
			'STOP_HANDLER_ANSWER_REPROMPT': ['Nenne mir die Linie, mit der du fahren möchtest.'],
			'STOP_HANDLER_ANSWER_NO_DEPARTURES': ['Leider fahren im Moment keine Bahnen von der Haltestelle %s.'],
			'STOP_HANDLER_HELP': [
				'<p>Um die aktuellen Abfahrtszeiten zu erhalten, musst du mir den Namen einer Haltestelle nennen. ' +
				'Bitte gebe den Namen der Haltestelle dabei exakt an. Bei einer Angabe wie zum Beispiel Europaplatz kann ich ansonsten nicht entscheiden, ' +
				'ob du Europaplatz Karlstraße oder Kaiserstraße meinst. Bei Haltestellen die mit dem Präfix Karlsruhe beginnen, musst du diesen nicht angeben. ' +
				'Bei allen übrigen Haltestellen, die nicht mit diesem Präfix beginnen, nenne mir bitte den vollständigen Namen wie zum Beispiel: ' +
				'Eggenstein Bahnhof.</p> Da es in und um Karlsruhe hunderte von Haltestellen gibt, kenne ich noch nicht alle Haltestellen des gesamten Liniennetzes. ' +
				'Falls du eine Haltestelle vermisst, kannst du gerne meinen Entwickler darauf hinweisen. Schreibe hierfür einfach eine Kundenrezension auf Amazon. ' +
				'Mein Entwickler wird die fehlenden Haltestellen schnellstmöglich nachtragen. <p>Wenn du nicht bei jeder Anfrage die Haltestelle angeben möchtest, ' +
				'dann kannst du eine Haltestelle als deinen Standard festlegen. Sage hierfür: Setze meine Standard Haltestelle.</p> ' +
				'<p>Ich hoffe, ich konnte dir mit diesen Informationen weiterhelfen. <say-as interpret-as="interjection">Bis dann.</say-as></p>'
			],
			'STANDARD_STOP_ANSWER': [
				'<say-as interpret-as="interjection">Alles klar</say-as>, ich trage Buxtehude als deine Standard Haltestelle ein.<break time="1s"/>' +
				'<say-as interpret-as="interjection">War nur ein Scherz.</say-as> Ich habe %s verstanden. Ist das richtig?'
			],
			'STANDARD_STOP_UNKNONW_STOP': ['Entschuldige, diese Haltestelle ist mir leider unbekannt. Nenne mir bitte erneut deine Haltestelle.'],
			'STANDARD_STOP_UNKNONW_STOP_REPROMPT': ['Welche Haltestelle möchtest du als deinen Standard festlegen?'],
			'STANDARD_STOP_YES': [
				'<say-as interpret-as="interjection">Prima</say-as>, ist erledigt.',
				'<say-as interpret-as="interjection">Okey dokey</say-as>, ist erledigt.',
			],
			'STANDARD_STOP_NO': ['<say-as interpret-as="interjection">Mist.</say-as> Welche Haltestelle meintest du dann?'],
			'STANDARD_STOP_HELP': [
				'Mit dieser Funktion kann ich deine Standard Haltestelle speichern. Wenn du deine Standard Haltestelle festlegst, kannst du mir zukünftig direkt ' +
				'folgende Frage stellen: <break time="0.5s"/>Wann fährt die nächste S5? Ich werde dann automatisch deine gespeicherte Haltestelle auswählen.'
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
			'DIRECT_DEPARTURE_HANDLER_NO_STANDARD_STOP': ['Um nicht bei jeder Anfrage die Haltestelle angeben zu müssen, kannst du eine Haltestelle als deinen Standard ' +
				'festlegen. Zum jetzigen Zeitpunkt hast du noch keinen gesetzt. Möchtest du dies jetzt ändern?'],
			'DIRECT_DEPARTURE_HANDLER_SELECT_STANDARD_STOP': ['Welche Haltestelle soll ich als deine Standard Haltestelle festlegen?'],
		}
	}
}