import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setColor] = useState("red");
	const ChangeColor = () => {
		if (selectedColor === "red") {
			setColor("yellow");

			console.log(selectedColor);
		} else if (selectedColor === "yellow") {
			setColor("green");

			console.log(selectedColor);
		} else if (selectedColor === "green") {
			setColor("red");
			console.log(selectedColor);
		}
	};

	return (
		<>
			<div className="traffic-light align-center">
				<div
					className={
						"red light" +
						(selectedColor === "red" ? " selected" : "")
					}
					onClick={() => setColor("red")}></div>
				<div
					className={
						"yellow light" +
						(selectedColor === "yellow" ? " selected" : "")
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						"green light" +
						(selectedColor === "green" ? " selected" : "")
					}
					onClick={() => setColor("green")}></div>
			</div>
			<div className="button">
				<button onClick={() => ChangeColor()}> Click me</button>
			</div>
		</>
	);
};

export default Home;
