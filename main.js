'use strict';

var fundamentalRights = [
"Article 13: The State shall not make any law which takes away \
or abridges the rights conferred by this Part and any law \
made in contravention of this clause shall, to the extent of \
the contravention, be void.",
"Article 14. The State shall not deny to any person equality \
before the law or the equal protection of the laws within the \
territory of India.",
"Article 15. (1) The State shall not discriminate against any \
citizen on grounds only of religion, race, caste, sex, place \
of birth or any of them.",
"Article 16. (1) There shall be equality of opportunity for all \
citizens in matters relating to employment or appointment \
to any office under the State.",
"Article 17. “Untouchability” is abolished and its practice in \
any form is forbidden. The enforcement of any disability \
arising out of “Untouchability” shall be an offence \
punishable in accordance with law",
"Article 18: No title, not being a military or academic \
distinction, shall be conferred by the State.",
"Article 19. (1) All citizens shall have the right— \
(a) to freedom of speech and expression; \
(b) to assemble peaceably and without arms; \
(c) to form associations or unions; \
(d) to move freely throughout the territory of India; \
(e) to reside and settle in any part of the territory \
of India; \
(f) omitted \
(g) to practise any profession, or to carry on any \
occupation, trade or business"
]
// "51A. It shall be the duty of every citizen of India—
var fundamentalDuties = [
"51 (a) to abide by the Constitution and respect its \
ideals and institutions, the National Flag and the \
National Anthem; ",
"51 (b) to cherish and follow the noble ideals which \
inspired our national struggle for freedom; ",
"51 (c) to uphold and protect the sovereignty, unity \
and integrity of India;",
"51 (d) to defend the country and render national \
service when called upon to do so;",
"51 (e) to promote harmony and the spirit of common \
brotherhood amongst all the people of India \
transcending religious, linguistic and regional or \
sectional diversities; to renounce practices derogatory \
to the dignity of women;",
"51 (f) to value and preserve the rich heritage of our \
composite culture;",
"51 (g) to protect and improve the natural environment \
including forests, lakes, rivers and wild life, and to \
have compassion for living creatures;",
"51 (h) to develop the scientific temper, humanism and \
the spirit of inquiry and reform;",
"51 (i) to safeguard public property and to abjure \
violence;",
"51 (j) to strive towards excellence in all spheres of \
individual and collective activity so that the nation \
constantly rises to higher levels of endeavour and \
achievement;",
"51 *[(k) who is a parent or guardian to provide \
opportunities for education to his child or, as the \
case may be, ward between the age of six and \
fourteen years.]"
]

function load() {
	setTimeout(function() {
		var idx = Number.parseInt((Math.random() * 100000) % fundamentalRights.length);
		document.getElementById('frDiv').innerText = fundamentalRights[idx];
		document.getElementById('fdDiv').innerText = fundamentalDuties[idx];
	});
}

document.addEventListener('DOMContentLoaded', function() {
	load();
});