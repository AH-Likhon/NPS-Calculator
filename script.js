// function calculateNPS() {
//   const detractorInputs = document.querySelectorAll(".detractors__input");
//   const passiveInputs = document.querySelectorAll(".passives__input");
//   const promoterInputs = document.querySelectorAll(".promoters__input");

//   //   console.log(promoterInputs);

//   let detractorTotal = "";
//   let passiveTotal = "";
//   let promoterTotal = "";
//   let totalResponses = 0;

//   detractorInputs.forEach((input) => {
//     const score = parseInt(input.value);
//     if (!isNaN(score) && score >= 0) {
//       detractorTotal += input.value; // Concatenate the input value as strings
//     }
//   });

//   passiveInputs.forEach((input) => {
//     const score = parseInt(input.value);
//     if (!isNaN(score) && score >= 0) {
//       passiveTotal += input.value; // Concatenate the input value as strings
//     }
//   });

//   promoterInputs.forEach((input) => {
//     const score = parseInt(input.value);
//     if (!isNaN(score) && score >= 0) {
//       promoterTotal += input.value; // Concatenate the input value as strings
//     }
//   });

//   // Convert the values to numbers using unary plus operator (+)
//   totalResponses =
//     (parseInt(detractorTotal) || 0) +
//     (parseInt(passiveTotal) || 0) +
//     (parseInt(promoterTotal) || 0);

//   //   console.log("Total:::", totalResponses);

//   // Calculate percentages
//   const percentagePromoters =
//     ((parseInt(promoterTotal) || 0) / totalResponses) * 100;
//   const percentageDetractors =
//     ((parseInt(detractorTotal) || 0) / totalResponses) * 100;

//   //   console.log("Detractor%:", typeof percentageDetractors);
//   //   console.log("Promoter%:", percentagePromoters);

//   // Calculate NPS score

//   const nps = Math.round(
//     (percentagePromoters || 0) - (percentageDetractors || 0)
//   );

//   // Update NPS score
//   const npsScoreText = document.querySelector(".inner__svg__score");
//   npsScoreText.textContent = nps;

//   // Log the NPS to console (you can remove this in production)
//   //   console.log("NPS:", nps);

//   const chartSvg = document.querySelector(".result__g");
//   if (nps < 0) {
//     chartSvg.classList.add("negative-score");
//   } else {
//     chartSvg.classList.remove("negative-score");
//   }
// }

// // Validate and Update NPS on Input
// const allInputs = document.querySelectorAll(
//   ".detractors__input, .passives__input, .promoters__input"
// );
// allInputs.forEach((input) => {
//   input.addEventListener("input", () => {
//     const score = parseInt(input.value);
//     if (!isNaN(score) && score >= 0) {
//       // Ensure positive values only
//       calculateNPS();
//     } else {
//       // Clear the input if it's invalid
//       input.value = "";
//     }
//   });
// });

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
  if (nps < 0) {
    chartSvg.classList.add("negative-score");
  } else {
    chartSvg.classList.remove("negative-score");
    if (nps >= 50) {
      chartSvg.classList.add("fifty__above__score");
    } else {
      chartSvg.classList.remove("fifty__above__score");
    }
  }
}

// Main function to handle NPS calculation and update
function calculateAndUpdateNPS() {
  const detractorInputs = document.querySelectorAll(".detractors__input");
  const passiveInputs = document.querySelectorAll(".passives__input");
  const promoterInputs = document.querySelectorAll(".promoters__input");

  let detractorTotal = "";
  let passiveTotal = "";
  let promoterTotal = "";

  detractorInputs.forEach((input) => {
    const score = parseInt(input.value);
    if (!isNaN(score) && score >= 0) {
      detractorTotal += input.value;
    }
  });

  passiveInputs.forEach((input) => {
    const score = parseInt(input.value);
    if (!isNaN(score) && score >= 0) {
      passiveTotal += input.value;
    }
  });

  promoterInputs.forEach((input) => {
    const score = parseInt(input.value);
    if (!isNaN(score) && score >= 0) {
      promoterTotal += input.value;
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
