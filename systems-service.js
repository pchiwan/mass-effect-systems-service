angular.module('mass-effect', [])
	.service('systemsService', function () {
	
		var clusters = [
			{
				name: 'Argos Rho', 
				relays: 1, 
				systems: [
					{
						name: 'Gorgon', 
						stellarMass: '17.8 Sol Masses', 
						stellarClass: 'B0',
						planets: [
							{ name: 'Camaron', dayLength: '664.8 Earth Years', orbitalPeriod: '664.8 Earth Years', temp: '747 °C', radius: '5,198 km' },
							{ name: 'Sharblu', dayLength: '1,711.0 Earth Years', orbitalPeriod: '1,711.0 Earth Years', temp: 'N/A', radius: '43,342 km' },
							{ name: 'Slekon', dayLength: '4,483.1 Earth Years', orbitalPeriod: '4,483.1 Earth Years', temp: 'N/A', radius: '77,115 km' },
							{ name: 'Vectra', dayLength: '234.7  Earth Years', orbitalPeriod: '234.7 Earth Years', temp: 'N/A', radius: '69,833 km' },
							{ name: 'Wuo', dayLength: '158.0 Earth Years', orbitalPeriod: '158.0 Earth Years', temp: '1,157 ºC', radius: '6,959 km' }
						]
					},
					{
						name: 'Hydra',
						stellarMass: 'N/A', 
						stellarClass: 'N/A',
						planets: [
							{ name: 'Canrum', dayLength: '32.5 Earth Hours', orbitalPeriod: '67.3 Earth Years', temp: '-132 °C', radius: '5,220 km' },
							{ name: 'Metgos', dayLength: '47.2 Earth Hours', orbitalPeriod: '2.8 Earth Years', temp: '169 °C', radius: '7,301 km' },
							{ name: 'Syba', dayLength: '12.8 Earth Hours', orbitalPeriod: '162.1 Earth Years', temp: 'N/A', radius: '45,145 km' },
							{ name: 'Theyar', dayLength: '11.8 Earth Hours', orbitalPeriod: '12.8 Earth Years', temp: 'N/A', radius: '60,774 km' },
							{ name: 'Varmalus', dayLength: '19.4 Earth Hours', orbitalPeriod: '0.4 Earth Years', temp: '503 °C', radius: '9,593 km' }
						]
					},
					{
						name: 'Phoenix',
						stellarMass: '1.7 Sol Masses',
						stellarClass: 'F0',
						planets: [
							{ name: 'Intai\'sei', dayLength: '27.6 Earth Hours', orbitalPeriod: '47.8 Earth Years', temp: '46 ºC', radius: '5,897 km' },
							{ name: 'Patashi', dayLength: '0.3 Earth Years', orbitalPeriod: '0.3 Earth Years', temp: '546 ºC', radius: '7,082 km' },
							{ name: 'Sylsalto', dayLength: '13.6 Earth Hours', orbitalPeriod: '36.0 Earth Years', temp: 'N/A', radius: '56,621 km' },
							{ name: 'Tuntau', dayLength: '69.7 Earth Hours', orbitalPeriod: '63.8 Earth Years', temp: '21 ºC', radius: '11,867 km' },
							{ name: 'Vebinok', dayLength: '68.3 Earth Hours', orbitalPeriod: '94.5 Earth Years', temp: '-154 ºC', radius: '3,379 km' }
						]
					}
				]
			},
			{
				name: 'Attican Beta',
				relays: 1,
				systems: [
					{
						name: 'Hercules',
						stellarMass: '1.7 Sol Masses',
						stellarClass: 'F0',
						planets: [
							{ name: 'Eletania', dayLength: '35.6 Earth Hours', orbitalPeriod: '34.4 Earth Years', temp: '13 ºC', radius: '8,864 km' },
							{ name: 'Syided', dayLength: '67.0 Earth Hours', orbitalPeriod: '0.4 Earth Years', temp: '523 ºC', radius: '7,702 km' },
							{ name: 'Xathorron', dayLength: '64.9 Earth Hours', orbitalPeriod: '9.5 Earth Years', temp: '388 ºC', radius: '3,537 km' },
							{ name: 'Zatorus', dayLength: '17.2 Earth Hours', orbitalPeriod: '113.1 Earth Years', temp: 'N/A', radius: '52,290 km' }
						]
					},
					{
						name: 'Theseus',
						stellarMass: 'N/A',
						stellarClass: 'N/A',
						planets: [
							{ name: 'Feros', dayLength: '30.3 Earth Hours', orbitalPeriod: '3.2 Earth Years', temp: '10 ºC', radius: '8,366 km' },
							{ name: 'Logan', dayLength: '18.6 Earth Hours', orbitalPeriod: '112.6 Earth Years', temp: 'N/A', radius: '66,341 km' },
							{ name: 'Quana', dayLength: '67.8 Earth Hours', orbitalPeriod: '9.0 Earth Years', temp: '-141 ºC', radius: '7,271 km' },
							{ name: 'Sharring', dayLength: '14.6 Earth Hours', orbitalPeriod: '46.6 Earth Years', temp: 'N/A', radius: '55,721 km' },
							{ name: 'Sytau', dayLength: '32.2 Earth Hours', orbitalPeriod: '1.1 Earth Years', temp: '343 ºC', radius: '9,547 km' }
						]
					}
				]
			},
			{
				name: 'Exodus Cluster',
				relays: 1,
				systems: [
					{
						name: 'Utopia',
						stellarMass: 'N/A',
						stellarClass: 'N/A',
						planets: [
							{ name: 'Arcadia', dayLength: '25.6 Earth Hours', orbitalPeriod: '0.6 Earth Years', temp: '358 ºC', radius: '10,893 km' },
							{ name: 'Eden Prime', dayLength: '64.1 Earth Hours', orbitalPeriod: '2.5 Earth Years', temp: '23 ºC', radius: '7,026 km' },
							{ name: 'Nirvana', dayLength: '63.9 Earth Hours', orbitalPeriod: '129.9 Earth Years', temp: '-203 ºC', radius: '3,212 km' },
							{ name: 'Xanadu', dayLength: '69.8 Earth Hours', orbitalPeriod: '1,029.9 Earth Years', temp: '-216 ºC', radius: '3,730 km' },
							{ name: 'Zion', dayLength: '10.5 Earth Hours', orbitalPeriod: '52.8 Earth Years', temp: 'N/A', radius: '74,333 km' }
						]
					},
					{
						name: 'Asgard',
						stellarMass: '1 Sol Mass',
						stellarClass: 'G2V',
						planets: [
							{ name: 'Borr', dayLength: '8.8 Earth Hours', orbitalPeriod: '3.3 Earth Years', temp: 'N/A', radius: '74,612 km' },
							{ name: 'Loki', dayLength: '61.3 Earth Hours', orbitalPeriod: '17.8 Earth Years', temp: '-135 ºC', radius: '3,630 km' },
							{ name: 'Terra Nova', dayLength: '37.3 Earth Hours', orbitalPeriod: '1.5 Earth Years', temp: '56 ºC', radius: '5,261 km' },
							{ name: 'Tyr', dayLength: '46.2 Earth Hours', orbitalPeriod: '8.05 Earth Years', temp: '-73 ºC', radius: '6,332 km' }
						]
					}
				]
			},
			{
				name: 'Gemini Sigma',
				relays: 1,
				systems: [
					{ 
						name: 'Han', 
						stellarMass: 'N/A', 
						stellarClass: 'N/A', 
						planets: [
							{ name: 'Farcrothu', dayLength: '8.4 Earth Hours', orbitalPeriod: '112.1 Earth Years', temp: 'N/A', radius: '66,014 km' },
							{ name: 'Huningto', dayLength: '16.7 Earth Hours', orbitalPeriod: '31.8 Earth Years', temp: 'N/A', radius: '73,733 km' },
							{ name: 'Mavigon', dayLength: '52.0 Earth Hours', orbitalPeriod: '42.3 Earth Years', temp: '-124 ºC', radius: '4,906 km' },
							{ name: 'Paravin', dayLength: '0.5 Earth Years', orbitalPeriod: '0.5 Earth Years', temp: '414 ºC', radius: '4,839 km' },
							{ name: 'Patatanlis', dayLength: '36.0 Earth Hours', orbitalPeriod: '297.4 Earth Years', temp: '-174 ºC', radius: '8,927 km' }
						] 
					},
					{ 
						name: 'Ming', 
						stellarMass: '60 Sol Masses', 
						stellarClass: 'O', 
						planets: [
							{ name: 'Altanorch', dayLength: '16.3 Earth Hours', orbitalPeriod: '4,005.7 Earth Years', temp: 'N/A', radius: '32,605 km' },
							{ name: 'Antiroprus', dayLength: '10.8 Earth Hours', orbitalPeriod: '284.2 Earth Years', temp: 'N/A', radius: '57,948 km' },
							{ name: 'Parag', dayLength: '22.4 Earth Hours', orbitalPeriod: '1,930.3 Earth Years', temp: '1,117 ºC', radius: '7,979 km' }
						] 
					}
				]				
			},
			{
				name: 'Hades Gamma',
				relays: 1,
				systems: [
					{ 
						name: 'Antaeus', 
						stellarMass: 'N/A', 
						stellarClass: 'N/A', 
						planets: [
							{ name: 'Ageko', dayLength: '59.9 Earth Hours', orbitalPeriod: '0.1 Earth Years', temp: '346 ºC', radius: '2,147 km' },
							{ name: 'Edmos', dayLength: '13.7 Earth Hours', orbitalPeriod: '7.8 Earth Years', temp: 'N/A', radius: '36,826 km' },
							{ name: 'Hunidor', dayLength: '48.2 Earth Hours', orbitalPeriod: '90.5 Earth Years', temp: '-202 ºC', radius: '3,686 km' },
							{ name: 'Ploba', dayLength: '17.3 Earth Hours', orbitalPeriod: '20.4 Earth Years', temp: 'N/A', radius: '74,221 km' },
							{ name: 'Trebin', dayLength: '41.8 Earth Hours', orbitalPeriod: '1.1 Earth Years', temp: '8 ºC', radius: '5,489 km' },
							{ name: 'Vemal', dayLength: '36.3 Earth Hours', orbitalPeriod: '37.5 Earth Years', temp: '-61 ºC', radius: '10,314 km' }
						] 
					},
					{ 
						name: 'Cacus', 
						stellarMass: '1.692 Sol Masses', 
						stellarClass: 'F0', 
						planets: [
							{ name: 'Chohe', dayLength: '54.5 Earth Hours', orbitalPeriod: '5.4 Earth Years', temp: '11 ºC', radius: '8,000 km' },
							{ name: 'Faringor', dayLength: '69.6 Earth Hours', orbitalPeriod: '69.8 Earth Years', temp: '-144 ºC', radius: '11,129 km' },
							{ name: 'Treyarmus', dayLength: '12.8 Earth Hours', orbitalPeriod: '286.7 Earth Years', temp: 'N/A', radius: '42,211 km' },
							{ name: 'Xamarri', dayLength: '42.1 Earth Hours', orbitalPeriod: '36.1 Earth Years', temp: '-117 ºC', radius: '2,236 km' },
							{ name: 'Zayarter', dayLength: '53.8 Earth Hours', orbitalPeriod: '2.1 Earth Years', temp: '166 ºC', radius: '5,535 km' }
						] 
					},
					{ 
						name: 'Dis', 
						stellarMass: 'N/A', 
						stellarClass: 'N/A', 
						planets: [
							{ name: 'Gremar', dayLength: '61.7 Earth Hours', orbitalPeriod: '35.4 Earth Years', temp: '-84 ºC', radius: '3,691 km' },
							{ name: 'Jartar', dayLength: '2.8 Earth Hours', orbitalPeriod: '2.8 Earth Years', temp: '82 ºC', radius: '1,410 km' },
							{ name: 'Klensal', dayLength: '37.2 Earth Hours', orbitalPeriod: '21.4 Earth Years', temp: '-35 ºC', radius: '5,447 km' },
							{ name: 'Nearrum', dayLength: '31.7 Earth Hours', orbitalPeriod: '6.3 Earth Years', temp: '58 ºC', radius: '6,779 km' },
							{ name: 'Raysha', dayLength: '11.5 Earth Hours', orbitalPeriod: '85.5 Earth Years', temp: 'N/A', radius: '34,914 km' }
						] 
					},
					{ 
						name: 'Farinata', 
						stellarMass: '32.827 Sol Masses', 
						stellarClass: 'O5', 
						planets: [
							{ name: 'Juntauma', dayLength: '102.0 Earth Years', orbitalPeriod: '102.0 Earth Years', temp: '1,176 ºC', radius: '4,227 km' },
							{ name: 'Nepneu', dayLength: '30.1 Earth Hours', orbitalPeriod: '302.0 Earth Years', temp: '848 ºC', radius: '3,742 km' },
							{ name: 'Tunshagon', dayLength: '9.1 Earth Hours', orbitalPeriod: '3.2 Earth Years', temp: 'N/A', radius: '42,418 km' }
						] 
					},
					{ 
						name: 'Plutus', 
						stellarMass: 'N/A', 
						stellarClass: 'N/A', 
						planets: [
							{ name: 'Clocrolis', dayLength: '57.0 Earth Hours', orbitalPeriod: '25.2 Earth Years', temp: '161 ºC', radius: '3,675 km' },
							{ name: 'Maidla', dayLength: '33.4 Earth Hours', orbitalPeriod: '3.3 Earth Years', temp: '497 ºC', radius: '6,914 km' },
							{ name: 'Mingito', dayLength: '1.4 Earth Years', orbitalPeriod: '1.4 Earth Years', temp: '675 ºC', radius: '4,384 km' },
							{ name: 'Nonuel', dayLength: '46.9 Earth Hours', orbitalPeriod: '94.0 Earth Years', temp: '127 ºC', radius: '4,439 km' },
							{ name: 'Veyaria', dayLength: '10.0 Earth Hours', orbitalPeriod: '239.2 Earth Years', temp: 'N/A', radius: '78,204 km' }		
						] 
					}
				]
			},
			{ 
				name: 'Hawking Eta', 
				relays: 1, 
				systems: [
					{ 
						name: 'Century', 
						stellarMass: '0.796 Sol Masses', 
						stellarClass: 'K0', 
						planets: [
							{ name: 'Canctra', dayLength: '66.7 Earth Hours', orbitalPeriod: '60.6 Earth Years', temp: '-175 ºC', radius: '5,471 km' },
							{ name: 'Klendagon', dayLength: '53.6 Earth Hours', orbitalPeriod: '2.3 Earth Years', temp: '-53 ºC', radius: '7,377 km' },
							{ name: 'Tamahera', dayLength: '40.1 Earth Hours', orbitalPeriod: '1.4 Earth Years', temp: '-30 ºC', radius: '6,302 km' },
							{ name: 'Tharopto', dayLength: '17.5 Earth Hours', orbitalPeriod: '128.2 Earth Years', temp: 'N/A', radius: '68,714 km' }
						] 
					},
					{ 
						name: 'Chandrasekhar', 
						stellarMass: '0.3 Sol Masses', 
						stellarClass: 'M', 
						planets: [
							{ name: 'Hebat', dayLength: '17.1 Earth Hours', orbitalPeriod: '2.9 Earth Years', temp: 'N/A', radius: '36,257 km' },
							{ name: 'Teshub', dayLength: '16.6 Earth Hours', orbitalPeriod: '1.6 Earth Years', temp: 'N/A', radius: '63,568 km' }
						] 
					},
					{ 
						name: 'Schwarzschild', 
						stellarMass: '0.82 Sol Masses', 
						stellarClass: 'G', 
						planets: [
							{ name: 'Atahil', dayLength: '28.8 Earth Hours', orbitalPeriod: '1 Earth Years', temp: '348 ºC', radius: '5,230 km' },
							{ name: 'Etamis', dayLength: '51.6 Earth Hours', orbitalPeriod: '1.6 Earth Years', temp: '-49.6 ºC', radius: '9,577 km' },
							{ name: 'Linossa', dayLength: '17.8 Earth Hours', orbitalPeriod: '6.8 Earth Years', temp: 'N/A', radius: '55,806 km' },
							{ name: 'Rihali', dayLength: '15.4 Earth Hours', orbitalPeriod: '17.9 Earth Years', temp: 'N/A', radius: '70,778 km' }
						] 
					},
					{ 
						name: 'Thorne', 
						stellarMass: '0.83 Sol Masses', 
						stellarClass: 'G', 
						planets: [
							{ name: 'Mnemosyne', dayLength: '18.7 Earth Hours', orbitalPeriod: '0.8 Earth Years', temp: '1,500 ºC', radius: '72,451 km' },
						] 
					},
					{ 
						name: 'Verr', 
						stellarMass: '0.35 Sol Masses', 
						stellarClass: 'M', 
						planets: [
							{ name: 'Allusah', dayLength: '18.1 Earth Hours', orbitalPeriod: '2.4 Earth Years', temp: 'N/A', radius: '25,652 km' },
							{ name: 'Corang', dayLength: '53.2 Earth Hours', orbitalPeriod: '0.9 Earth Years', temp: '58 ºC', radius: '4,911 km' },
							{ name: 'Serao', dayLength: '9.7 Earth Hours', orbitalPeriod: '5.7 Earth Years', temp: 'N/A', radius: '70,881 km' }
						] 
					}
				]
			},
			{
				name: 'Horse Head Nebula',
				relays: 1,
				systems: [
					{ 
						name: 'Anadius', 
						stellarMass: '20 Sol Masses', 
						stellarClass: 'M Ia', 
						planets: [] 
					},
					{ 
						name: 'Fortuna', 
						stellarMass: '0.4 Sol Masses', 
						stellarClass: 'M V', 
						planets: [
							{ name: 'Amaranthine', dayLength: '59.7 Earth Hours', orbitalPeriod: '12.0 Earth Years', temp: '-178 ºC', radius: '6,694 km' },
							{ name: 'Maganlis', dayLength: '33.2 Earth Hours', orbitalPeriod: '2.4 Earth Years', temp: '-150 ºC', radius: '7,708 km' },
							{ name: 'Therumlon', dayLength: '69.0 Earth Hours', orbitalPeriod: '31.4 Earth Years', temp: '-134 ºC', radius: '5,492 km' },
							{ name: 'Wentania', dayLength: '32.5 Earth Hours', orbitalPeriod: '82.2 Earth Years', temp: '-237 ºC', radius: '3,198 km' }
						] 
					},
					{ 
						name: 'Pax', 
						stellarMass: '0.788 Sol Masses', 
						stellarClass: 'K0', 
						planets: [
							{ name: 'Morana', dayLength: '17.7 Earth Years', orbitalPeriod: '17.7 Earth Years', temp: '-158 ºC', radius: '1,089 km' },
							{ name: 'Noveria', dayLength: '52.0 Earth Hours', orbitalPeriod: '0.9 Earth Years', temp: '-1 ºC', radius: '5,656 km' },
							{ name: 'Svarog', dayLength: '13.4 Earth Hours', orbitalPeriod: '0.2 Earth Years', temp: 'N/A', radius: '32,285 km' },
							{ name: 'Veles', dayLength: '62.0 Earth Hours', orbitalPeriod: '136.6 Earth Years', temp: '-220 ºC', radius: '7,547 km' }
						] 
					},
					{ 
						name: 'Strenuus', 
						stellarMass: 'N/A', 
						stellarClass: 'N/A', 
						planets: [
							{ name: 'Antitarra', dayLength: '14.7 Earth Hours', orbitalPeriod: '52.0 Earth Years', temp: 'N/A', radius: '35,417 km' },
							{ name: 'Thesalgon', dayLength: '15.5 Earth Hours', orbitalPeriod: '173.4 Earth Years', temp: 'N/A', radius: '53,520 km' },
							{ name: 'Trelyn', dayLength: '36.7 Earth Hours', orbitalPeriod: '74.9 Earth Years', temp: '-147 ºC', radius: '1,163 km' },
							{ name: 'Xawin', dayLength: '21.8 Earth Hours', orbitalPeriod: '97.3 Earth Years', temp: '-131 ºC', radius: '5,756 km' },
							{ name: 'Yunthori', dayLength: '55.2 Earth Hours', orbitalPeriod: '5.8 Earth Years', temp: '68 ºC', radius: '5,905 km' }
						] 
					}
				]
			},
			{
				name: 'Kepler Verge',
				relays: 1,
				systems: [
					{ 
						name: 'Herschel', 
						stellarMass: '>40 Sol Masses', 
						stellarClass: 'O', 
						planets: [
							{ name: 'Clobaka', dayLength: '59.7 Earth Hours', orbitalPeriod: '2,052.3 Earth Years', temp: '7 ºC', radius: '8,198 km' },
							{ name: 'Clugon', dayLength: '19.2 Earth Hours', orbitalPeriod: '1,013.71 Earth Years', temp: 'N/A', radius: '17,988 km' },
							{ name: 'Matol', dayLength: '34.6 Earth Hours', orbitalPeriod: '207.3 Earth Years', temp: '33 ºC', radius: '4,077 km' },
							{ name: 'Tungel', dayLength: '42.4 Earth Hours', orbitalPeriod: '85.8 Earth Years', temp: '242 ºC', radius: '11,539 km' }
						] 
					},
					{ 
						name: 'Newton', 
						stellarMass: 'N/A', 
						stellarClass: 'N/A', 
						planets: [
							{ name: 'Juncro', dayLength: '16.8 Earth Hours', orbitalPeriod: '60.0 Earth Years', temp: 'N/A', radius: '66,642 km' },
							{ name: 'Klencory', dayLength: '18.3 Earth Hours', orbitalPeriod: '20.6 Earth Years', temp: '-109 ºC', radius: '7,677 km' },
							{ name: 'Ontarom', dayLength: '39.1 Earth Hours', orbitalPeriod: '1.2 Earth Years', temp: '58 ºC', radius: '6,443 km' },
							{ name: 'Sesmose', dayLength: '23.9 Earth Hours', orbitalPeriod: '272.2 Earth Years', temp: '-188 ºC', radius: '3,111 km' }
						] 
					}
				]
			},
			{ 
				name: 'Local Cluster', 
				relays: 1, 
				systems: [
					{ 
						name: 'Sol', 
						stellarMass: '1 Sol Mass', 
						stellarClass: 'G2V', 
						planets: [
							{ name: 'Earth', dayLength: '23.9 Earth Hours', orbitalPeriod: '1 Earth Years', temp: '23 ºC', radius: '6,378 km' },
							{ name: 'Jupiter', dayLength: '9.93 Earth Hours', orbitalPeriod: '11.7 Earth Years', temp: 'N/A', radius: '71,492 km' },
							{ name: 'Mars', dayLength: '24.6 Earth Hours', orbitalPeriod: '1.88 Earth Years', temp: '-138 ºC', radius: '3,402 km' },
							{ name: 'Mercury', dayLength: '58.7 Earth Days', orbitalPeriod: '88 Earth Days', temp: '430 ºC', radius: '2,440 km' },
							{ name: 'Neptune', dayLength: '16.1 Earth Hours', orbitalPeriod: '164.8 Earth Years', temp: 'N/A', radius: '24,764 km' },
							{ name: 'Pluto', dayLength: '9.4 Earth Hours', orbitalPeriod: '247.7 Earth Years', temp: '-229 ºC', radius: '1,151 km' },
							{ name: 'Saturn', dayLength: '10.3 Earth Hours', orbitalPeriod: '29.5 Earth Years', temp: 'N/A', radius: '60,268 km' },
							{ name: 'Uranus', dayLength: '17.3 Earth Hours', orbitalPeriod: '84.3 Earth Years', temp: 'N/A', radius: '25,559 km' },
							{ name: 'Venus', dayLength: '243 Earth Days', orbitalPeriod: '224.7 Earth Days', temp: '465 ºC', radius: '6,052 km' }
						] 
					}
				] 
			},
			{ 
				name: 'Maroon Sea', 
				relays: 1, 
				systems: [
					{ 
						name: 'Caspian', 
						stellarMass: '>40 Sol Masses', 
						stellarClass: 'O', 
						planets: [
							{ name: 'Almarcrux', dayLength: '64.7 Earth Hours', orbitalPeriod: '584.1 Earth Years', temp: '31 ºC', radius: '4,715 km' },
							{ name: 'Antida', dayLength: '12.8 Earth Hours', orbitalPeriod: '1,296.1 Earth Years', temp: 'N/A', radius: '29,657 km' },
							{ name: 'Clotanca', dayLength: '19.7 Earth Hours', orbitalPeriod: '124.7 Earth Years', temp: '92 ºC', radius: '7,810 km' },
							{ name: 'Farnuri', dayLength: '67.8 Earth Hours', orbitalPeriod: '352.7 Earth Years', temp: '-98 ºC', radius: '8,968 km' } 
						] 
					},
					{ 
						name: 'Matano', 
						stellarMass: 'N/A', 
						stellarClass: 'N/A', 
						planets: [
							{ name: 'Apo', dayLength: '56.7 Earth Hours', orbitalPeriod: '29.7 Earth Years', temp: '-116 ºC', radius: '6,843 km' },
							{ name: 'Chasca', dayLength: '1.3 Earth Years', orbitalPeriod: '1.3 Earth Years', temp: '67 ºC', radius: '8,059 km' },
							{ name: 'Illapa', dayLength: '15.7 Earth Hours', orbitalPeriod: '74.1 Earth Years', temp: 'N/A', radius: '72,820 km' },
							{ name: 'Inti', dayLength: '0.6 Earth Years', orbitalPeriod: '0.6 Earth Years', temp: '157 ºC', radius: '9,032 km' },
							{ name: 'Supay', dayLength: '63.4 Earth Hours', orbitalPeriod: '275.5 Earth Years', temp: '-216 ºC', radius: '4,317 km' } 
						] 
					},
					{ 
						name: 'Vostok', 
						stellarMass: 'N/A', 
						stellarClass: 'N/A', 
						planets: [
							{ name: 'Alko', dayLength: '45.2 Earth Hours', orbitalPeriod: '28.7 Earth Years', temp: '-167 ºC', radius: '4,949 km' },
							{ name: 'Clomarthu', dayLength: '18.8 Earth Hours', orbitalPeriod: '1 Earth Years', temp: '95 ºC', radius: '6,028 km' },
							{ name: 'Nodacrux', dayLength: '22.2 Earth Hours', orbitalPeriod: '3.6 Earth Years', temp: '23 ºC', radius: '5,988 km' },
							{ name: 'Pataiton', dayLength: '18.6 Earth Hours', orbitalPeriod: '110.2 Earth Years', temp: 'N/A', radius: '16,622 km' } 
						] 
					}
				] 
			},
			{
				name: 'Pangaea Expanse',
				relays: 1,
				systems: [
					{ 
						name: 'Refuge', 
						stellarMass: 'N/A', 
						stellarClass: 'N/A', 
						planets: [
							{ name: 'Agetoton', dayLength: '53.5 Earth Hours', orbitalPeriod: '0.4 Earth Years', temp: '510 ºC', radius: '6,172 km' },
							{ name: 'Ilos', dayLength: '54.5 Earth Hours', orbitalPeriod: '261 Earth Days', temp: '38 ºC', radius: '8,607 km' },
							{ name: 'Zafe', dayLength: '12.2 Earth Hours', orbitalPeriod: '33.8 Earth Years', temp: 'N/A', radius: '30,488 km' }
						] 
					}
				]
			},
			{
				name: 'Sentry Omega',
				relays: 1,
				systems: [
					{ 
						name: 'Hoc', 
						stellarMass: 'N/A', 
						stellarClass: 'N/A', 
						planets: [
							{ name: 'Cloroplon', dayLength: '13.4 Earth Hours', orbitalPeriod: '47.8 Earth Years', temp: 'N/A', radius: '32,191 km' },
							{ name: 'Jarfor', dayLength: '1.3 Earth Years', orbitalPeriod: '1.3 Earth Years', temp: 'N/A', radius: '63,169 km' },
							{ name: 'Nemata', dayLength: '70.4 Earth Hours', orbitalPeriod: '3.5 Earth Years', temp: '168 ºC', radius: '7,318 km' },
							{ name: 'Prescyla', dayLength: '24.9 Earth Hours', orbitalPeriod: '108.7 Earth Years', temp: '-158 ºC', radius: '2,075 km' },
							{ name: 'Virmire', dayLength: '22.3 Earth Hours', orbitalPeriod: '9.2 Earth Years', temp: '32 ºC', radius: '6,440 km' }
						] 
					}
				]
			},
			{
				name: 'Serpent Nebula',
				relays: 1,
				systems: [
					{ 
						name: 'Boltzmann', 
						stellarMass: '1.00 Sol Mass', 
						stellarClass: 'G', 
						planets: [
							{ name: 'Bekenstein', dayLength: '21.3 Earth Hours', orbitalPeriod: '2.4 Earth Years', temp: '25-43 ºC', radius: '6,050 km' },
							{ name: 'Feynman', dayLength: '16.9 Earth Hours', orbitalPeriod: '59.4 Earth Years', temp: 'N/A', radius: '40,196 km' },
							{ name: 'Thooft', dayLength: '34.2 Earth Hours', orbitalPeriod: '6.8 Earth Years', temp: '-5 ºC', radius: '3,247 km' },
							{ name: 'Veltman', dayLength: '14.0 Earth Hours', orbitalPeriod: '19.0 Earth Years', temp: 'N/A', radius: '61,755 km' },
							{ name: 'Wheeler', dayLength: '60.5 Earth Hours', orbitalPeriod: '0.8 Earth Years', temp: '165 ºC', radius: '7,894 km' }
						] 
					},
					{ 
						name: 'Widow', 
						stellarMass: 'N/A', 
						stellarClass: 'N/A', 
						planets: [
							{ name: 'Citadel', dayLength: 'N/A', orbitalPeriod: 'N/A', temp: 'N/A', radius: 'N/A' }
						] 
					}
				]
			},
			{
				name: 'Styx Theta',
				relays: 1,
				systems: [
					{ 
						name: 'Acheron', 
						stellarMass: '0.8 Sol Masses', 
						stellarClass: 'K0', 
						planets: [
							{ name: 'Altahe', dayLength: '53.8 Earth Hours', orbitalPeriod: '0.8 Earth Years', temp: '36 ºC', radius: '4,404 km' },
							{ name: 'Farthori', dayLength: '0.2 Earth Years', orbitalPeriod: '0.2 Earth Years', temp: '239 ºC', radius: '6,506 km' },
							{ name: 'Grosalgen', dayLength: '28.9 Earth Hours', orbitalPeriod: '41.5 Earth Years', temp: '-175 ºC', radius: '5,198 km' },
							{ name: 'Imaneya', dayLength: '56.4 Earth Hours', orbitalPeriod: '117.7 Earth Years', temp: '-185 ºC', radius: '11,621 km' }
						] 
					},
					{ 
						name: 'Erebus', 
						stellarMass: 'N/A', 
						stellarClass: 'N/A', 
						planets: [
							{ name: 'Chofen', dayLength: '13.7 Earth Hours', orbitalPeriod: '56.9 Earth Years', temp: 'N/A', radius: '21,481 km' },
							{ name: 'Nepmos', dayLength: '68.1 Earth Hours', orbitalPeriod: '0.7 Earth Years', temp: '68 ºC', radius: '7,593 km' },
							{ name: 'Quaji', dayLength: '38.7 Earth Hours', orbitalPeriod: '2.9 Earth Years', temp: '-7 ºC', radius: '5,160 km' },
							{ name: 'Wermani', dayLength: '9.2 Earth Hours', orbitalPeriod: '9.9 Earth Years', temp: 'N/A', radius: '71,541 km' }
						] 
					}
				]
			},
			{
				name: 'Voyager Cluster',
				relays: 1,
				systems: [
				]
			}
		];

		//{ name: '', relays: 1, systems: [] }
		//{ name: '', stellarMass: '', stellarClass: '', planets: [] }
		//{ name: '', dayLength: ' Earth Hours', orbitalPeriod: ' Earth Years', temp: ' ºC', radius: ' km' }

		this.getClusters = function () {
			return _.map(clusters, function (x) {
				return {
					name: x.name,
					relays: x.relays,
					systems: x.systems.length
				};
			});
		};

		this.getClusterName = function (idCluster) {
			return clusters[idCluster].name;
		};		

		this.getSystems = function (idCluster) {
			if (!clusters[idCluster].systems.length)
				return [];

			return _.map(clusters[idCluster].systems, function (x) {
				return {
					name: x.name,
					stellarMass: x.stellarMass,
					stellarClass: x.stellarClass,
					planets: x.planets.length
				};
			});
		};

		this.getSystemName = function (idCluster, idSystem) {
			return clusters[idCluster].systems[idSystem].name;
		};
		
		this.getPlanets = function (idCluster, idSystem) {
			if (!clusters[idCluster].systems.length)
				return [];

			if (!clusters[idCluster].systems[idSystem].planets.length)
				return [];

			return clusters[idCluster].systems[idSystem].planets;
		};

		this.getAllSystemsOfCluster = function (idCluster) {
			var systems = [];
			_.each(clusters[idCluster].systems, function (system) {
				system['cluster'] = clusters[idCluster].name;
				systems.push(system);
			});
			return systems;
		};

		this.getAllPlanetsOfCluster = function (idCluster) {
			var planets = [];
			_.each(clusters[idCluster].systems, function (system) {
				_.each(system.planets, function (planet) {
					planet['cluster'] = clusters[idCluster].name;
					planet['system'] = system.name;
					planets.push(planet);
				});
			});
			return planets;
		};
	});

