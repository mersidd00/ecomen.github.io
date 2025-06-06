  // التحكم في زيادة أو تقليل الكمية
  const quantityInput = document.getElementById("quantity");
  const increaseBtn = document.getElementById("increaseQty");
  const decreaseBtn = document.getElementById("decreaseQty");

  increaseBtn.addEventListener("click", () => {
      let currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
  });

  decreaseBtn.addEventListener("click", () => {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
          quantityInput.value = currentValue - 1;
      }
  });

    

    const wilayas = [
        { number: 1, name: "أدرار", price: 1400 },
        { number: 2, name: "الشلف", price: 800 },
        { number: 3, name: "الأغواط", price: 950 },
        { number: 4, name: "أم البواقي", price: 750 },
        { number: 5, name: "باتنة", price: 800 },
        { number: 6, name: "بجاية", price: 750 },
        { number: 7, name: "بسكرة", price: 750 },
        { number: 8, name: "بشار", price: 1000 },
        { number: 9, name: "البليدة", price: 750 },
        { number: 10, name: "البويرة", price: 750 },
        { number: 11, name: "تامنراست", price: 1600 },
        { number: 12, name: "تبسة", price: 850 },
        { number: 13, name: "تلمسان", price: 900 },
        { number: 14, name: "تيارت", price: 800 },
        { number: 15, name: "تيزي وزو", price: 750 },
        { number: 16, name: "الجزائر", price: 600 },
        { number: 17, name: "الجلفة", price: 950 },
        { number: 18, name: "جيجل", price: 750 },
        { number: 19, name: "سطيف", price: 600 },
        { number: 20, name: "سعيدة", price: 800 },
        { number: 21, name: "سكيكدة", price: 750 },
        { number: 22, name: "سيدي بلعباس", price: 800 },
        { number: 23, name: "عنابة", price: 800 },
        { number: 24, name: "قالمة", price: 750 },
        { number: 25, name: "قسنطينة", price: 750 },
        { number: 26, name: "المدية", price: 800 },
        { number: 27, name: "مستغانم", price: 800 },
        { number: 28, name: "المسيلة", price: 850 },
        { number: 29, name: "معسكر", price: 800 },
        { number: 30, name: "ورقلة", price: 950 },
        { number: 31, name: "وهران", price: 750 },
        { number: 32, name: "البيض", price: 1100 },
        { number: 33, name: "إليزي", price: null },
        { number: 34, name: "برج بوعريريج", price: 750 },
        { number: 35, name: "بومرداس", price: 750 },
        { number: 36, name: "الطارف", price: 800 },
        { number: 37, name: "تندوف", price: null },
        { number: 38, name: "تسمسيلت", price: 800 },
        { number: 39, name: "الوادي", price: 950 },
        { number: 40, name: "خنشلة", price: 800 },
        { number: 41, name: "سوق أهراس", price: 750 },
        { number: 42, name: "تيبازة", price: 750 },
        { number: 43, name: "ميلة", price: 700 },
        { number: 44, name: "عين الدفلى", price: 750 },
        { number: 45, name: "النعامة", price: 1100 },
        { number: 46, name: "عين تموشنت", price: 800 },
        { number: 47, name: "غرداية", price: 950 },
        { number: 48, name: "غليزان", price: 800 },
        { number: 49, name: "تيميمون", price: 1400 },
        { number: 50, name: "برج باجي مختار", price: null },
        { number: 51, name: "أولاد جلال", price: 900 },
        { number: 52, name: "بني عباس", price: 1000 },
        { number: 53, name: "عين صالح", price: 1600 },
        { number: 54, name: "عين قزام", price: 1600 },
        { number: 55, name: "تقرت", price: 950 },
        { number: 56, name: "جانت", price: null },
        { number: 57, name: "المغير", price: 950 },
        { number: 58, name: "المنيعة", price: 1000 }
    ];

const stateSelect = document.getElementById("state");
    wilayas.forEach(wilaya => {
        const option = document.createElement("option");
        option.value = wilaya.name;
        option.textContent = `${wilaya.number}-${wilaya.name} `;
        option.dataset.price = wilaya.price;
        if (wilaya.price === null) {
            option.disabled = true;
            option.textContent += " - غير متوفر";
        }
        stateSelect.appendChild(option);
    });

    function updatePrice() {
        let selectedOption = stateSelect.options[stateSelect.selectedIndex]; // الحصول على العنصر المحدد
        let selectedPrice = selectedOption.dataset.price; // الحصول على السعر من dataset
        document.getElementById("deliveryPrice").value = selectedPrice ? `${selectedPrice} دج` : "0 دج";
    }

const thumbSlider = new Swiper(".thumb-slider", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const mainSlider = new Swiper(".main-slider", {
  spaceBetween: 10,
  loop: true,
  thumbs: {
    swiper: thumbSlider,
  },
});
