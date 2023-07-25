// Function to calculate the total responses
function calculateTotalResponses(detractorTotal, passiveTotal, promoterTotal) {
  return (
    (parseInt(detractorTotal) || 0) +
    (parseInt(passiveTotal) || 0) +
    (parseInt(promoterTotal) || 0)
  );
}

// Function to calculate the percentages
function calculatePercentages(totalResponses, detractorTotal, promoterTotal) {
  const percentagePromoters =
    ((parseInt(promoterTotal) || 0) / totalResponses) * 100;
  const percentageDetractors =
    ((parseInt(detractorTotal) || 0) / totalResponses) * 100;
  return { percentagePromoters, percentageDetractors };
}

// Function to calculate the NPS score
function calculateNPS(percentagePromoters, percentageDetractors) {
  return Math.round((percentagePromoters || 0) - (percentageDetractors || 0));
}

// Function to update the NPS score on the page
function updateNPS(nps) {
  const npsScoreText = document.querySelector(".inner__svg__score");
  npsScoreText.textContent = nps;

  const chartSvg = document.querySelector(".result__g");
  const polygon = document.querySelector(".inner__svg polygon");

  const polygonTransform = calculatePolygonTransform(nps);
  polygon.setAttribute("transform", polygonTransform);

  if (nps < 0) {
    chartSvg.classList.remove("fifty__above__score");
    chartSvg.classList.add("negative-score");
  } else if (nps >= 50 && nps <= 100) {
    chartSvg.classList.remove("negative-score");
    chartSvg.classList.add("fifty__above__score");
  } else {
    chartSvg.classList.remove("fifty__above__score");
    chartSvg.classList.remove("negative-score");
  }
}

// Function to calculate the new transform for the polygon based on the NPS result
function calculatePolygonTransform(nps) {
  if (nps > 0 && nps <= 5) {
    return `translate(17.5, 120) rotate(6.8)`;
  } else if (nps > 5 && nps <= 10) {
    return `translate(60, 125) rotate(13.6)`;
  } else if (nps > 10 && nps <= 15) {
    return `translate(102.5, 130) rotate(20.4)`;
  } else if (nps > 15 && nps <= 20) {
    return `translate(145, 135) rotate(27.2)`;
  } else if (nps > 20 && nps <= 25) {
    return `translate(187.5, 145) rotate(34)`;
  } else if (nps > 25 && nps <= 30) {
    return `translate(230, 155) rotate(40.8)`;
  } else if (nps > 30 && nps <= 35) {
    return `translate(272.5, 185) rotate(47.6)`;
  } else if (nps > 35 && nps <= 40) {
    return `translate(315, 205) rotate(54.4)`;
  } else if (nps > 40 && nps <= 45) {
    return `translate(357.5, 250) rotate(61.2)`;
  } else if (nps > 45 && nps < 50) {
    return `translate(400, 295) rotate(68)`;
  } else if (nps === 50) {
    return `translate(442.5, 370) rotate(74.8)`;
  } else if (nps >= 50 && nps <= 55) {
    return `translate(485, 450) rotate(81.6)`;
  } else if (nps > 55 && nps <= 60) {
    return `translate(515, 520) rotate(88.4)`;
  } else if (nps > 60 && nps <= 65) {
    return `translate(515, 580) rotate(95.2)`;
  } else if (nps > 65 && nps <= 70) {
    return `translate(515, 620) rotate(102)`;
  } else if (nps > 70 && nps <= 75) {
    return `translate(515, 660) rotate(108.8)`;
  } else if (nps > 75 && nps <= 80) {
    return `translate(510, 720) rotate(115.6)`;
  } else if (nps > 80 && nps <= 85) {
    return `translate(500, 740) rotate(122.4)`;
  } else if (nps > 85 && nps <= 90) {
    return `translate(490, 760) rotate(129.2)`;
  } else if (nps > 90 && nps <= 95) {
    return `translate(475, 800) rotate(136)`;
  } else if (nps === 95) {
    return `translate(465, 840) rotate(142.8)`;
  } else if (nps === 96) {
    return `translate(450, 850) rotate(142.8)`;
  } else if (nps === 97) {
    return `translate(440, 860) rotate(142.8)`;
  } else if (nps === 98) {
    return `translate(430, 870) rotate(142.8)`;
  } else if (nps === 98) {
    return `translate(420, 880) rotate(142.8)`;
  } else if (nps === 99) {
    return `translate(410, 900) rotate(142.8)`;
  } else if (nps === 100) {
    return `translate(400, 910) rotate(142.8)`;
  } else if (nps < 0 && nps >= -2) {
    return `translate(-95, 115) rotate(-5)`;
  } else if (nps < 2 && nps >= -5) {
    return `translate(-110, 135) rotate(-5)`;
  } else if (nps < -5 && nps >= -10) {
    return `translate(-145, 145) rotate(-10)`;
  } else if (nps < -10 && nps >= -15) {
    return `translate(-180, 155) rotate(-15)`;
  } else if (nps < -15 && nps >= -20) {
    return `translate(-215, 170) rotate(-20)`;
  } else if (nps < -20 && nps >= -25) {
    return `translate(-250, 190) rotate(-25)`;
  } else if (nps < -25 && nps >= -30) {
    return `translate(-280, 210) rotate(-30)`;
  } else if (nps < -30 && nps >= -35) {
    return `translate(-325, 240) rotate(-35)`;
  } else if (nps < -35 && nps >= -40) {
    return `translate(-365, 285) rotate(-40)`;
  } else if (nps < -40 && nps >= -45) {
    return `translate(-400, 340) rotate(-45)`;
  } else if (nps < -45 && nps > -49) {
    return `translate(-430, 400) rotate(-55)`;
  } else if (nps === -50) {
    return `translate(-440, 460) rotate(-65)`;
  } else if (nps < -50 && nps >= -55) {
    return `translate(-475, 545) rotate(-75)`;
  } else if (nps < -55 && nps >= -60) {
    return `translate(-475, 605) rotate(-85)`;
  } else if (nps < -60 && nps >= -65) {
    return `translate(-465, 680) rotate(-95)`;
  } else if (nps < -65 && nps >= -70) {
    return `translate(-450, 740) rotate(-105)`;
  } else if (nps < -70 && nps >= -75) {
    return `translate(-425, 780) rotate(-115)`;
  } else if (nps < -75 && nps >= -80) {
    return `translate(-410, 820) rotate(-115)`;
  } else if (nps < -80 && nps >= -85) {
    return `translate(-405, 860) rotate(-115)`;
  } else if (nps < -85 && nps >= -90) {
    return `translate(-390, 880) rotate(-115)`;
  } else if (nps < -90 && nps >= -95) {
    return `translate(-350, 920) rotate(-115)`;
  } else if (nps < -95 && nps >= -99) {
    return `translate(-300, 980) rotate(-135)`;
  } else if (nps === -100) {
    return `translate(-280, 990) rotate(-135)`;
  } else {
    return `translate(-25, 120) rotate(0)`;
  }
}

// else if (nps === -7) {
//   return `translate(60, 104) rotate(10)`;
// }

// else if (nps >= 50 && nps <= 100) {
//   return `translate(450, 380) rotate(68)`;
// } else if (nps <= 0 && nps >= -49) {
//   return `translate(-440, 460) rotate(-60)`;
// }

// Function to calculate the new transform for the polygon based on the NPS result
// function calculatePolygonTransform(nps) {
//   if (nps > 0 && nps <= 49) {
//     const t = nps / 49; // Normalize the NPS value between 0 and 1
//     const angle = -60 + t * 60; // Rotate from -60 to 0 degrees
//     const x = 0 + t * (250 - 0); // Translate horizontally from 0 to 250
//     const y = 0 + t * (460 - 0); // Translate vertically from 0 to 460
//     return `translate(${x - 25}, ${y + 120}) rotate(${angle})`;
//   } else if (nps >= 50 && nps <= 100) {
//     const t = (nps - 50) / 50; // Normalize the NPS value between 0 and 1
//     const angle = 0 + t * 68; // Rotate from 0 to 68 degrees
//     const x = 250 + t * (450 - 250); // Translate horizontally from 250 to 450
//     const y = 460 - t * (460 - 380); // Translate vertically from 460 to 380
//     return `translate(${x - 25}, ${y + 120}) rotate(${angle})`;
//   } else if (nps < 0 && nps >= -49) {
//     const t = nps / -49; // Normalize the NPS value between 0 and 1
//     const angle = -120 + t * 60; // Rotate from -120 to -60 degrees
//     const x = 0 + t * (250 - 0); // Translate horizontally from 0 to 250
//     const y = 0 + t * (460 - 0); // Translate vertically from 0 to 460
//     return `translate(${x - 25}, ${y + 120}) rotate(${angle})`;
//   } else if (nps < -49 && nps >= -100) {
//     const t = (nps - -49) / (100 - -49); // Normalize the NPS value between 0 and 1
//     const angle = -180 + t * 60; // Rotate from -180 to -120 degrees
//     const x = 0 + t * (250 - 0); // Translate horizontally from 0 to 250
//     const y = 0 + t * (460 - 0); // Translate vertically from 0 to 460
//     return `translate(${x - 25}, ${y + 120}) rotate(${angle})`;
//   } else {
//     return `translate(-25, 120) rotate(0)`;
//   }
// }

// Main function to handle NPS calculation and update
function calculateAndUpdateNPS() {
  const detractorInputs = document.querySelectorAll(".detractors__input");
  const passiveInputs = document.querySelectorAll(".passives__input");
  const promoterInputs = document.querySelectorAll(".promoters__input");

  let detractorTotal = 0; // Initialize the detractorTotal variable to 0
  let passiveTotal = 0;
  let promoterTotal = 0;

  detractorInputs.forEach((input) => {
    const score = parseInt(input.value);
    if (!isNaN(score) && score >= 0) {
      detractorTotal += score; // Add the score to detractorTotal
    }
  });

  passiveInputs.forEach((input) => {
    const score = parseInt(input.value);
    if (!isNaN(score) && score >= 0) {
      passiveTotal += score;
    }
  });

  promoterInputs.forEach((input) => {
    const score = parseInt(input.value);
    if (!isNaN(score) && score >= 0) {
      promoterTotal += score;
    }
  });

  const totalResponses = calculateTotalResponses(
    detractorTotal,
    passiveTotal,
    promoterTotal
  );

  const { percentagePromoters, percentageDetractors } = calculatePercentages(
    totalResponses,
    detractorTotal,
    promoterTotal
  );

  const nps = calculateNPS(percentagePromoters, percentageDetractors);

  updateNPS(nps);
}

// Validate and Update NPS on Input
const allInputs = document.querySelectorAll(
  ".detractors__input, .passives__input, .promoters__input"
);
allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    const score = parseInt(input.value);
    if (!isNaN(score) && score >= 0) {
      // Ensure positive values only
      calculateAndUpdateNPS();
    } else {
      // Clear the input if it's invalid
      input.value = "";
    }
  });
});
