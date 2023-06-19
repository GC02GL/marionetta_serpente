SUPSI 2022-23  
Corso d’interaction design, CV427.01  
Docenti: A. Gysin, G. Profeta  

Elaborato 1: Marionetta digitale  

# Marionetta Serpente
Autore: Gloria CorradiN

https://ixd-supsi.github.io/2023/progetti/1_marionetta_digitale/



## Introduzione e tema
Per il primo elaborato abbiamo generato una marionetta in realtà aumentata applicata su una mano tramite un sistema di interfaccia, con l'obiettivo di rappresentare graficamente un personaggio con un proprio carattere.
La mia idea è stata quella di realizzare una marionetta che avesse più interazioni possibili.
Il sistema di interfaccia ha lo scopo di essere intuibile e facile anche per gli utenti non esperti.
L’elaborato ha lo scopo di creare un senso di stupore e anche di divertimento nello sperimentare le tre facce e espressioni della marionetta.



## Riferimenti progettuali
Per il mio elaborato mi sono ispirata ad un vero proprio serpente, che invece di cambiare pelle, cambia faccia e le sue espressioni.
Per le espressioni mi sono ispirata a delle facce umane bizzarre e particolari.



## Design dell’interfraccia e modalià di interazione
All’apertura della pagina troviamo uno sfondo nero a tinta unita. Una volta che la webcam riconosce lo scheletro della mano appare la prima faccia della marionetta. Tramite un click delle seguenti lettere della tastiera (x, c, v) la marionetta cambia faccia e espressioni e ad ogni movimento ha delle ripetizioni in loop delle immagini creando un effetto dinamico.
Per creare una faccia ho assegnato ogni immagine, di occhi o bocca, ad un punto della mano in modo tale da rendere più vera e reale possibile la mia marionetta.

[<img src="doc/foto1.png" width="500" alt="Magic trick">]
[<img src="doc/foto2.png" width="500" alt="Magic trick">]
[<img src="doc/foto3.png" width="500" alt="Magic trick">]




## Tecnologia usata
La tecnologia utilizzata per la realizzazione della marionetta si basa su diverse funzioni e algoritmi. Non solo la fotocamera del computer riconosce le mani per il tracciamento e il disegno della marionetta ma viene utilizzanto anche l'utlizzo della tastiera per interagire sulle diverse espressioni create.
Per prima cosa tramite la funzione LET creo e denomino una nuova variabile, in questo caso definisco le immagini che andrò ad inserire.
Tramite la funzione Preload inserisco le immagini definendo le loro posizioni nelle cartelle con i nomi precisi.
Tramite la funzione Draw, ad ogni costante attribuisco un punto specifico della mano dove voglio posizionare le mie immagini, inserendo le coordinate della costante e la loro dimensione. 
Con la funzione KeyPressed assegno ad ogni lettera delle immagini diverse, in modo tale che quando si clicca una specifica lettera assume delle facce diverse a loro assegnate.

Inserisco le immagini


async function preload (){
img = loadImage("occhi/occhi-verdi.png")
img2 = loadImage("occhi/occhi-verdiSX.png")
img3 = loadImage("occhi/bocca-lingua.png")
img4 = loadImage("occhi/occhi-rossi.png")
img5 = loadImage("occhi/occhi-rossi-sx.png")
img6 = loadImage("occhi/Bocca-aperta.png")
img7 = loadImage("occhi/Occhio_Strano.png")
img8 = loadImage("occhi/Occhio_StranoSX.png")
img9 = loadImage("occhi/Bocca_Strana.png")


}

Attribuisco ad ogni punto specifico della mano dove voglio posizionare le immagini

async function draw() {
	
	if (detector && capture.loadedmetadata) {
		const hands = await detector.estimateHands(capture.elt, { flipHorizontal: true })
		
		if (hands.length == 1) {
			const hand = hands[0]
			const handedness = hand.handedness 
			noStroke()
			
			const p = hand.keypoints[20]
			const k = hand.keypoints[11]
			const l = hand.keypoints[9]
			
			image(img, p.x, p.y, 100, 100)
			image(img2, k.x, k.y, 100, 100)
			image(img3, l.x, l.y, 150, 150)
			
			
		}		
		else {
			background(0)
		}
	}
}

Assegno ad ogni lettera delle immagini diverse

async function keyPressed(){
	if(key == "c") {
		
		img =  loadImage("occhi/occhi-rossi.png")
		img2 = img
		img3 = loadImage("occhi/Bocca-aperta.png")

	} else if(key == "v") {
		
		img =  loadImage("occhi/occhi-verdi.png")
		img2 = img
		img3 = loadImage("occhi/bocca-lingua.png")

	} else if(key == "x"){

		img = loadImage("occhi/Occhio_Strano.png")
		img2 = img
		img3 = loadImage("occhi/Bocca_Strana.png")


	}
}   

## Target e contesto d’uso
Il mio target è un vasto gruppo di persone che comprende sia bambini che adulti. Mi sono immaginata di vedere il mio elaborato in un museo interattivo. Gli spettatori potranno interagire unicamente con la marionetta realizzando una influenza reciproca.



https://github.com/GC02GL/marionetta_serpente/assets/126774228/f07cceb0-282b-4167-8668-4802b0d61c3b




