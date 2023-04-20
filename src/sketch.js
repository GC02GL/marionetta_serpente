let capture
let detector
let img
let img1
let img2
let img3
let img4
let img5
let img6
let img7
let img8
let img9



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


async function setup() {
  
	createCanvas(windowWidth, windowHeight)
	
	capture = createCapture(VIDEO)
	capture.size(windowWidth, windowHeight)
	capture.hide(windowWidth, windowHeight)
	
	console.log("Carico modello...")
	detector = await createDetector()

}

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

async function createDetector() {
	
	const mediaPipeConfig = {
		runtime: "mediapipe",
		modelType: "full",
		maxHands: 1,
		solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands`,
	}
	return window.handPoseDetection.createDetector( window.handPoseDetection.SupportedModels.MediaPipeHands, mediaPipeConfig )
}
