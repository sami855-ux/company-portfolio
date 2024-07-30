"use strict"
//Elemnts

const lists = document.querySelectorAll(".menu-list li a")
const btn = document.querySelectorAll(".btn")
const tabH3 = document.querySelector(".wrap-text-mesg section h3")
const tabP = document.querySelector(".wrap-text-mesg section p")
const menu = document.querySelector(".menu-list")
const btnProduct = document.querySelector(".btn-product")
const productSection = document.querySelector("#wrap--product")
const cancleBtn = document.querySelector(".btn--cancle__modal")
const wrapModal = document.querySelector(".wrap--modal")
const wrapOverlay = document.querySelector(".wrap--overaly")
const openModalBtn = document.querySelectorAll(".open--modal")
const wrapFeatures = document.querySelector(".company-features")
const wrapHome = document.querySelector(".wrap-home")
const mainNav = document.querySelector(".header")
const wrapOperation = document.querySelector(".wrap-operation")

btn.forEach((bn) => {
  bn.addEventListener("click", (e) => {
    btn.forEach((b) => {
      b.classList.remove("up-5")
    })
    e.target.classList.add("up-5")

    let innerTextP = e.target.innerText
    let textH3 = ""
    let textP = ""

    if (innerTextP == "Personal portoflio websites") {
      textH3 = "Request any portfoli wth any requirements"
      textP =
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Exdoloribus non omnis corrupti. Similique rem veritatis in, sint cupiditate fugit mollitia, quod harum ea maxime quo facilis maiores? Dicta eum error in corporis minus suscipit quibusdam. Id unde placeat tempore?"
    } else if (innerTextP == "Bank system") {
      textH3 = "Efficent and Efective system for bank customers"
      textP =
        "  Inventore est officia ut ad ex. Voluptatum ratione accusamus hic ipsum cumque repudiandae quos itaque vel debitis in nobis architecto sit voluptatem nulla quisquam, quod cupiditate veniam optio illo quis iure blanditiis error. Placeat eligendi inventore quas iusto sapiente praesentium repudiandae tenetur numquam totam quasi  "
    } else if (innerTextP == "Server security") {
      textH3 = "Anything with server Security can be handled like an ant"
      textP =
        "Deserunt dolor expedita numquam quaerat corrupti. Dolorum cumque aspernatur ipsum repudiandae quia id provident asperiores sequi, mollitia odio soluta, sed beatae vero praesentium. Excepturi unde debitis quis possimus animi non similique quo, iste, voluptatibus rerum beatae necessitatibus mollitia."
    }

    tabH3.textContent = textH3
    tabP.textContent = textP
  })
})

const slider = function () {
  const slides = document.querySelectorAll(".slide")
  const btnLeft = document.querySelector(".slider__btn--left")
  const btnRight = document.querySelector(".slider__btn--right")
  const dotContainer = document.querySelector(".dots")

  let curSlide = 0
  const maxSlide = slides.length

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      )
    })
  }

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"))

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active")
  }

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    )
  }

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0
    } else {
      curSlide++
    }

    goToSlide(curSlide)
    activateDot(curSlide)
  }

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1
    } else {
      curSlide--
    }
    goToSlide(curSlide)
    activateDot(curSlide)
  }

  const init = function () {
    goToSlide(0)
    createDots()

    activateDot(0)
  }
  init()

  // Event handlers
  btnRight.addEventListener("click", nextSlide)
  btnLeft.addEventListener("click", prevSlide)

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide()
    e.key === "ArrowRight" && nextSlide()
  })

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset
      goToSlide(slide)
      activateDot(slide)
    }
  })
}
slider()

//Smooth scrolling Effect

menu.addEventListener("click", function (e) {
  e.preventDefault()
  let el = e.target

  if (!el.classList.contains("menu-link")) return
  const id = el.getAttribute("href")
  const view = document.querySelector(id)
  console.log(id, view)

  view.scrollIntoView({ behavior: "smooth" })
})

btnProduct.addEventListener("click", function (e) {
  productSection.scrollIntoView({
    behavior: "smooth",
  })
})

//Modal View
const openModal = (e) => {
  wrapModal.classList.remove("hidden")
  wrapOverlay.classList.remove("hidden")
}
const closeModal = (e) => {
  wrapModal.classList.add("hidden")
  wrapOverlay.classList.add("hidden")
}
openModalBtn.forEach(function (btn) {
  btn.addEventListener("click", openModal)
})
cancleBtn.addEventListener("click", closeModal)

const homeCord = wrapFeatures.getBoundingClientRect()

//Sticky menu
const stickyMenu = function (entries, observer) {
  const [entry] = entries
  // console.log(entry)

  if (!entry.isIntersecting) mainNav.classList.add("sticky")
  else mainNav.classList.remove("sticky")
}
const menuObserver = new IntersectionObserver(stickyMenu, {
  root: null,
  threshold: 0,
  rootMargin: "-65px",
})
menuObserver.observe(wrapHome)

//Revel effect
const allWrapper = document.querySelectorAll(".wrapper")

const reavelFun = (entries, observer) => {
  const [entry] = entries
  console.log(entry)

  entry.target.classList.remove("wrap--hidden")
}
const observer = new IntersectionObserver(reavelFun, {
  root: null,
  threshold: 0.15,
})
allWrapper.forEach((wrapper) => {
  observer.observe(wrapper)
})
