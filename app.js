const categories = [
  {
    id: "daily",
    label: "오늘의 운세",
    description: "단 한 장으로 오늘의 흐름과 우선순위를 확인합니다.",
    requiredCards: 1,
    positions: [
      {
        label: "오늘의 메시지",
        prompt: "오늘 하루 어떤 일이 일어날지 생각하며 카드를 선택하세요.",
      },
    ],
    drawDescription:
      "당일 컨디션과 핵심 키워드를 잡아낼 단일 카드를 선택하세요.",
    resultDescription:
      "오늘의 일정과 마음가짐을 조율하는 데 도움을 주는 메시지입니다.",
    summaryIntro:
      "오늘은 작은 징후와 기회를 포착하는 섬세한 주의력이 필요합니다.",
    advice:
      "뽑은 카드의 키워드를 하루 계획표나 일기 맨 위에 기록해 보세요.",
  },
  {
    id: "relationship",
    label: "연애·관계 상담",
    description: "나와 상대, 관계 흐름을 다각도로 살피는 5카드 리딩.",
    requiredCards: 5,
    positions: [
      {
        label: "나의 마음",
        prompt: "지금 내가 느끼는 감정을 솔직하게 떠올리며 카드를 선택하세요.",
      },
      {
        label: "상대의 마음",
        prompt: "상대가 어떤 마음일지 상상하며 카드를 선택하세요.",
      },
      {
        label: "관계의 현재",
        prompt: "두 사람 사이의 현재 분위기와 상황을 떠올리며 카드를 선택하세요.",
      },
      {
        label: "도전/장애",
        prompt: "관계를 어렵게 만드는 요소를 떠올리며 카드를 선택하세요.",
      },
      {
        label: "앞으로의 가능성",
        prompt: "함께 맞이하고 싶은 미래를 마음속에 그리며 카드를 선택하세요.",
      },
    ],
    drawDescription:
      "각 포지션에 맞춰 총 5장을 뽑아 나와 상대의 마음을 비교해보세요.",
    resultDescription:
      "카드별 메시지를 비교하며 대화 포인트와 균형점을 찾아보세요.",
    summaryIntro:
      "이 리딩은 감정의 흐름과 상호작용 패턴을 재정렬해 주는 데 초점이 맞춰져 있습니다.",
    advice:
      "카드가 던진 키워드를 바탕으로 상대에게 전하고 싶은 한 문장을 적어보세요.",
  },
  {
    id: "career",
    label: "커리어·진로 상담",
    description: "현재 위치와 다음 스텝을 구조적으로 조망하는 5카드.",
    requiredCards: 5,
    positions: [
      {
        label: "현재 위치",
        prompt: "지금 서 있는 업무 환경과 역할을 떠올리며 카드를 선택하세요.",
      },
      {
        label: "핵심 강점",
        prompt: "내가 잘해온 점과 강점을 마음속으로 강조하며 카드를 선택하세요.",
      },
      {
        label: "도전 과제",
        prompt: "현재 부딪히는 문제나 부담을 떠올리며 카드를 선택하세요.",
      },
      {
        label: "다가올 기회",
        prompt: "앞으로 만나고 싶은 기회와 가능성을 상상하며 카드를 선택하세요.",
      },
      {
        label: "실행 전략",
        prompt: "지금 당장 실천하고 싶은 행동 계획을 생각하며 카드를 선택하세요.",
      },
    ],
    drawDescription:
      "커리어 나침반 스프레드를 위해 5장의 카드를 뽑아 흐름을 점검하세요.",
    resultDescription:
      "일과 성장의 방향성을 확인하고 실천 계획을 구체화해 보세요.",
    summaryIntro:
      "커리어 카드들은 역량·환경·동기를 조직적으로 재점검하게 돕습니다.",
    advice:
      "카드가 강조한 강점과 도전을 각각 실행 가능한 목표로 바꿔보세요.",
  },
  {
    id: "wealth",
    label: "재물·금전 운세",
    description: "재정 흐름과 기회를 살피는 4카드 밸런스 리딩.",
    requiredCards: 4,
    positions: [
      {
        label: "현재 재정 상태",
        prompt: "지금의 수입과 지출 흐름을 객관적으로 떠올리며 카드를 선택하세요.",
      },
      {
        label: "자원을 키울 방법",
        prompt: "자산을 늘리고 싶은 방향을 상상하며 카드를 선택하세요.",
      },
      {
        label: "지켜야 할 부분",
        prompt: "지키고 싶은 재정 습관이나 안전장치를 떠올리며 카드를 선택하세요.",
      },
      {
        label: "향후 전망",
        prompt: "앞으로의 재정 흐름과 목표를 마음속에 그리며 카드를 선택하세요.",
      },
    ],
    drawDescription:
      "재정 상태를 점검하기 위해 균형 포인트 4장을 차례로 뽑아보세요.",
    resultDescription:
      "수입·지출·투자 계획을 정비하고 우선순위를 재조정하는 데 활용하세요.",
    summaryIntro:
      "재물 리딩은 현실적인 숫자 감각과 장기적 균형을 위한 조언을 강조합니다.",
    advice:
      "카드 메시지를 기록한 뒤 예산표에 바로 적용할 항목을 표시해보세요.",
  },
  {
    id: "decision",
    label: "의사결정 지원(선택 갈림길)",
    description: "선택지 A/B를 비교하고 조언 카드를 보는 6카드 리딩.",
    requiredCards: 6,
    positions: [
      {
        label: "현재 상황",
        prompt: "지금 고민이 어떤 상황인지 정리하며 카드를 선택하세요.",
      },
      {
        label: "선택 A - 강점",
        prompt: "선택지 A의 장점을 떠올리며 카드를 선택하세요.",
      },
      {
        label: "선택 A - 주의점",
        prompt: "선택지 A에서 우려되는 지점을 생각하며 카드를 선택하세요.",
      },
      {
        label: "선택 B - 강점",
        prompt: "선택지 B의 기대되는 모습을 상상하며 카드를 선택하세요.",
      },
      {
        label: "선택 B - 주의점",
        prompt: "선택지 B에서 주의해야 할 부분을 떠올리며 카드를 선택하세요.",
      },
      {
        label: "결정 조언",
        prompt: "결정을 마친 후의 나를 떠올리며 조언을 받을 마음으로 카드를 선택하세요.",
      },
    ],
    drawDescription:
      "각 선택지를 객관적으로 비교하기 위해 총 6장을 차례대로 뽑습니다.",
    resultDescription:
      "장단점과 조언을 비교 정리해 최종 결정 근거를 명확히 해보세요.",
    summaryIntro:
      "의사결정 리딩은 객관성과 직감을 함께 활용해 균형 잡힌 판단을 돕습니다.",
    advice:
      "카드가 지적한 리스크를 ‘만일 이렇게 되면?’ 시나리오로 정리하세요.",
  },
  {
    id: "healing",
    label: "힐링·마음 정리 카드",
    description: "감정 회복을 돕는 3카드 감정 치유 스프레드.",
    requiredCards: 3,
    positions: [
      {
        label: "현재 감정",
        prompt: "지금 느끼는 감정을 있는 그대로 바라보며 카드를 선택하세요.",
      },
      {
        label: "치유를 막는 요소",
        prompt: "회복을 방해하는 감정이나 생각을 떠올리며 카드를 선택하세요.",
      },
      {
        label: "회복을 돕는 조언",
        prompt: "나를 따뜻하게 돌보고 싶은 마음으로 카드를 선택하세요.",
      },
    ],
    drawDescription:
      "마음을 정리하기 위해 감정·방해 요소·치유 조언을 담은 3장을 뽑아요.",
    resultDescription:
      "감정 기록 노트나 셀프 케어 플랜에 카드 메시지를 옮겨 적어보세요.",
    summaryIntro:
      "힐링 리딩은 감정의 흐름을 있는 그대로 받아들이고 천천히 회복하도록 안내합니다.",
    advice:
      "카드가 제시한 조언을 실천 가능한 하루 루틴으로 바꿔보세요.",
  },
  {
    id: "newyear",
    label: "신년 운세",
    description: "분기별 흐름을 살피며 새해 전체 에너지를 점검하는 4카드 리딩.",
    requiredCards: 4,
    positions: [
      {
        label: "1분기 흐름",
        prompt: "새해 첫 세 달 동안 이루고 싶은 모습을 떠올리며 카드를 선택하세요.",
      },
      {
        label: "2분기 흐름",
        prompt: "봄과 초여름의 성장과 변화를 그리며 카드를 선택하세요.",
      },
      {
        label: "3분기 흐름",
        prompt: "여름과 초가을의 에너지와 도전을 상상하며 카드를 선택하세요.",
      },
      {
        label: "4분기 흐름",
        prompt: "한 해를 마무리하고 싶은 마음으로 마지막 카드를 선택하세요.",
      },
    ],
    drawDescription:
      "분기별 에너지를 대표할 4장을 차례로 뽑아 새해 흐름을 바라봅니다.",
    resultDescription:
      "각 분기의 흐름을 확인하고 한 해를 준비해 보세요.",
    summaryIntro:
      "연간 리딩은 장기 플랜과 리듬을 조율해 한 해의 방향성을 잡도록 돕습니다.",
    advice:
      "분기별 카드 메시지를 캘린더나 플래너에 적어 길게 이어지는 흐름을 기록해보세요.",
  },
];

const state = {
  cards: [],
  deck: [],
  selectedCategory: null,
  selectedCards: [],
  currentIndex: 0,
  view: "landing",
  dropdownOpen: false,
  cardButtons: [],
  scrollRAF: null,
  isDragging: false,
  dragStartX: 0,
  dragStartScrollLeft: 0,
  isIntroPlaying: false,
  introTimeoutId: null,
  activePointerId: null,
};

const elements = {
  views: {
    landing: document.getElementById("view-landing"),
    drawing: document.getElementById("view-drawing"),
    results: document.getElementById("view-results"),
  },
  dropdownToggle: document.querySelector("[data-dropdown-toggle]"),
  dropdownMenu: document.querySelector("[data-dropdown-menu]"),
  dropdownLabel: document.querySelector("[data-dropdown-label]"),
  selectionSummary: document.querySelector("[data-selection-summary]"),
  startButton: document.querySelector("[data-start]"),
  resetAllButton: document.querySelector("[data-reset-all]"),
  intro: {
    dialog: document.querySelector("[data-intro-dialog]"),
    gif: document.querySelector("[data-intro-gif]"),
  },
  drawing: {
    title: document.querySelector("[data-view-title]"),
    description: document.querySelector("[data-view-description]"),
    pickProgress: document.querySelector("[data-pick-progress]"),
    deckCount: document.querySelector("[data-deck-count]"),
    positionList: document.querySelector("[data-position-list]"),
    openPicker: document.querySelector("[data-open-picker]"),
    pickerDialog: document.querySelector("[data-card-picker]"),
    positionInstruction: document.querySelector("[data-position-instruction]"),
    pickerContainer: document.querySelector("[data-card-picker-content]"),
    cardTrack: document.querySelector("[data-card-track]"),
    pickButton: document.querySelector("[data-pick-card]"),
    closePicker: document.querySelector("[data-close-picker]"),
    preview: document.querySelector("[data-selected-preview]"),
    showResults: document.querySelector("[data-show-results]"),
    backToCategory: document.querySelector("[data-back-to-category]"),
  },
  results: {
    title: document.querySelector("[data-results-title]"),
    description: document.querySelector("[data-results-description]"),
    cards: document.querySelector("[data-results-cards]"),
    overallSummary: document.querySelector("[data-overall-summary]"),
    keywordChips: document.querySelector("[data-keyword-chips]"),
    restart: document.querySelector("[data-restart]"),
    loading: document.querySelector("[data-result-loading]"),
  },
};

const suitMeanings = {
  Wands: "행동과 열정",
  Cups: "감정과 관계",
  Swords: "사고와 판단",
  Pentacles: "현실과 자원",
};

const suitLabels = {
  Wands: "완드",
  Cups: "컵",
  Swords: "소드",
  Pentacles: "펜타클",
};

async function init() {
  try {
    await loadCards();
    renderCategoryDropdown();
    elements.dropdownToggle.setAttribute("aria-expanded", "false");
    attachGlobalEvents();
    updateSelectionSummary();
    updateView("landing");
  } catch (error) {
    console.error(error);
    elements.selectionSummary.textContent =
      "카드 데이터를 불러오지 못했습니다. 새로고침 후 다시 시도해주세요.";
  }
}

async function loadCards() {
  const response = await fetch("data/cards.json", { cache: "no-cache" });
  if (!response.ok) {
    throw new Error("카드 데이터를 불러오지 못했습니다.");
  }
  const cards = await response.json();
  state.cards = cards;
}

function renderCategoryDropdown() {
  const fragment = document.createDocumentFragment();
  categories.forEach((category) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "dropdown-item";
    button.dataset.categoryId = category.id;
    button.setAttribute("role", "option");
    button.setAttribute("tabindex", "-1");
    button.innerHTML = `
      <h3>${category.label}</h3>
      <p>${category.description}</p>
    `;
    item.appendChild(button);
    fragment.appendChild(item);
  });
  elements.dropdownMenu.innerHTML = "";
  elements.dropdownMenu.appendChild(fragment);
}

function attachGlobalEvents() {
  elements.dropdownToggle.addEventListener("click", handleDropdownToggle);
  elements.dropdownToggle.addEventListener("keydown", handleDropdownToggleKey);
  if (window.PointerEvent) {
    elements.dropdownToggle.addEventListener("pointerdown", handleDropdownTogglePointer);
    elements.dropdownMenu.addEventListener(
      "pointerdown",
      handleDropdownMenuPointerDown
    );
  } else {
    elements.dropdownToggle.addEventListener("touchstart", handleDropdownToggleTouch, {
      passive: false,
    });
    elements.dropdownMenu.addEventListener("touchstart", handleDropdownMenuTouch, {
      passive: false,
    });
  }
  elements.dropdownMenu.addEventListener("click", handleDropdownMenuClick);
  document.addEventListener("click", handleDocumentClickForDropdown);
  document.addEventListener("keydown", handleDropdownEscapeClose);

  document.addEventListener("keydown", handleKeyNavigation);
  elements.startButton.addEventListener("click", handleStartButtonClick);
  elements.resetAllButton.addEventListener("click", resetAll);
  elements.intro.dialog?.addEventListener("cancel", (event) => {
    event.preventDefault();
    handleIntroDismiss();
  });
  elements.drawing.openPicker?.addEventListener("click", openCardPicker);
  elements.drawing.pickButton?.addEventListener("click", pickCurrentCard);
  elements.drawing.closePicker?.addEventListener("click", closeCardPicker);
  elements.drawing.pickerDialog?.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeCardPicker();
  });
  elements.drawing.showResults?.addEventListener("click", showResults);
  elements.drawing.backToCategory?.addEventListener("click", () => {
    updateView("landing");
  });
  elements.results.restart.addEventListener("click", resetAll);
  if (elements.drawing.cardTrack) {
    const track = elements.drawing.cardTrack;
    track.addEventListener("scroll", handleTrackScroll, { passive: true });
    track.addEventListener("wheel", handleTrackWheel, { passive: false });
    track.addEventListener("pointerdown", handleTrackPointerDown);
    track.addEventListener("pointermove", handleTrackPointerMove, {
      passive: false,
    });
    track.addEventListener("pointerup", handleTrackPointerUp);
    track.addEventListener("pointercancel", handleTrackPointerCancel);
    track.addEventListener("pointerleave", handleTrackPointerLeave);

    if (!window.PointerEvent) {
      track.addEventListener("touchstart", handleTrackTouchStart, {
        passive: false,
      });
      track.addEventListener("touchmove", handleTrackTouchMove, {
        passive: false,
      });
      track.addEventListener("touchend", handleTrackTouchEnd);
      track.addEventListener("touchcancel", handleTrackTouchEnd);
    }
  }
}

function activateDropdownOption(option) {
  if (!option) return;
  const categoryId = option.dataset.categoryId;
  if (!categoryId) return;
  selectCategory(categoryId);
  closeDropdown();
  elements.dropdownToggle.focus({ preventScroll: true });
}

function handleDropdownTogglePointer(event) {
  if (event.pointerType !== "touch") return;
  event.preventDefault();
  event.stopPropagation();
  toggleDropdown();
}

function handleDropdownMenuPointerDown(event) {
  if (event.pointerType !== "touch") return;
  const option = event.target.closest(".dropdown-item");
  if (!option) return;
  event.preventDefault();
  event.stopPropagation();
  activateDropdownOption(option);
}

function handleDropdownToggleTouch(event) {
  event.preventDefault();
  event.stopPropagation();
  toggleDropdown();
}

function handleDropdownMenuTouch(event) {
  const option = event.target.closest(".dropdown-item");
  if (!option) return;
  event.preventDefault();
  event.stopPropagation();
  activateDropdownOption(option);
}

function handleDropdownToggle(event) {
  event.preventDefault();
  event.stopPropagation();
  toggleDropdown();
}

function handleDropdownToggleKey(event) {
  if (event.key === "ArrowDown") {
    event.preventDefault();
    openDropdown();
    return;
  }
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleDropdown();
  }
}

function handleDropdownMenuClick(event) {
  const option = event.target.closest(".dropdown-item");
  if (!option) return;
  event.preventDefault();
  event.stopPropagation();
  activateDropdownOption(option);
}

function handleDocumentClickForDropdown(event) {
  if (!event.target.closest("[data-dropdown]")) {
    closeDropdown();
  }
}

function handleDropdownEscapeClose(event) {
  if (event.key === "Escape") {
    closeDropdown();
  }
}

function toggleDropdown() {
  if (state.dropdownOpen) {
    closeDropdown();
  } else {
    openDropdown();
  }
}

function openDropdown() {
  if (state.dropdownOpen) return;
  setDropdownOpen(true);
  elements.dropdownMenu
    .querySelectorAll(".dropdown-item")
    .forEach((item) => item.setAttribute("tabindex", "0"));
  requestAnimationFrame(() => {
    const firstItem = elements.dropdownMenu.querySelector(".dropdown-item");
    firstItem?.focus();
  });
}

function closeDropdown() {
  if (!state.dropdownOpen) return;
  setDropdownOpen(false);
}

function setDropdownOpen(isOpen) {
  state.dropdownOpen = isOpen;
  elements.dropdownMenu.classList.toggle("hidden", !isOpen);
  elements.dropdownToggle.classList.toggle("open", isOpen);
  elements.dropdownToggle.setAttribute("aria-expanded", String(isOpen));
  if (!isOpen) {
    elements.dropdownMenu.querySelectorAll(".dropdown-item").forEach((item) => {
      item.setAttribute("tabindex", "-1");
    });
  }
}

function selectCategory(categoryId) {
  const category = categories.find((item) => item.id === categoryId);
  if (!category) return;

  state.selectedCategory = category;
  elements.dropdownLabel.textContent = category.label;
  elements.startButton.disabled = false;
  updateSelectionSummary();
}

function updateSelectionSummary() {
  const summary = elements.selectionSummary;
  if (!state.selectedCategory) {
    summary.textContent =
      "카테고리를 선택하면 필요한 카드 수와 포지션 안내가 표시됩니다.";
    return;
  }

  const { requiredCards, positions, description, drawDescription } =
    state.selectedCategory;
  const positionList = positions
    .map((position, index) => `${index + 1}. ${position.label}`)
    .join("<br />");

  summary.innerHTML = `
    <strong>${description}</strong>
    <p>필요한 카드: <b>${requiredCards}장</b></p>
    <p>${drawDescription}</p>
    <p><b>포지션 안내</b><br />${positionList}</p>
  `;
}

function startDrawingPhase() {
  closeIntroSequence();
  if (!state.selectedCategory) return;
  initializeDeck();
  renderDrawingInterface();
  updateView("drawing");
  elements.drawing.openPicker?.focus({ preventScroll: true });
}

function initializeDeck() {
  state.deck = shuffle(state.cards.slice());
  state.currentIndex = 0;
  state.selectedCards = [];
  state.cardButtons = [];
}

function renderDrawingInterface() {
  const category = state.selectedCategory;
  if (!category) return;

  elements.drawing.title.textContent = `${category.label} 카드 선택`;
  elements.drawing.description.textContent = category.drawDescription;

  renderPositionList(category.positions);
  renderCardOptions();
  renderSelectedPreview();
  updatePickerInstruction();
  updateDrawingStatus();
  updateDrawingControls();
}

function renderPositionList(positions) {
  const fragment = document.createDocumentFragment();
  positions.forEach(({ label }, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${label}`;
    fragment.appendChild(li);
  });
  elements.drawing.positionList.innerHTML = "";
  elements.drawing.positionList.appendChild(fragment);
}

function openCardPicker() {
  if (
    !elements.drawing.pickerDialog ||
    !elements.drawing.openPicker ||
    elements.drawing.openPicker.disabled ||
    state.deck.length === 0
  ) {
    return;
  }

  updatePickerInstruction();
  renderCardOptions();

  if (elements.drawing.pickerContainer) {
    elements.drawing.pickerContainer.scrollTop = 0;
  }

  if (typeof elements.drawing.pickerDialog.showModal === "function") {
    elements.drawing.pickerDialog.showModal();
  } else {
    elements.drawing.pickerDialog.setAttribute("open", "");
  }

  if (elements.drawing.pickButton) {
    elements.drawing.pickButton.disabled =
      state.selectedCards.length >= state.selectedCategory.requiredCards ||
      state.deck.length === 0;
  }

  requestAnimationFrame(() => {
    elements.drawing.cardTrack?.focus({ preventScroll: true });
  });
}

function closeCardPicker() {
  if (!elements.drawing.pickerDialog) return;
  const track = elements.drawing.cardTrack;
  if (track) {
    track.classList.remove("dragging");
    state.activePointerId = null;
  }
  state.isDragging = false;
  if (typeof elements.drawing.pickerDialog.close === "function") {
    if (elements.drawing.pickerDialog.open) {
      elements.drawing.pickerDialog.close();
    }
  } else {
    elements.drawing.pickerDialog.removeAttribute("open");
  }
}

function renderSelectedPreview() {
  const container = elements.drawing.preview;
  const category = state.selectedCategory;
  if (!category) return;

  const fragment = document.createDocumentFragment();
  category.positions.forEach(({ label }, index) => {
    const slot = document.createElement("div");
    slot.className = "preview-slot";

    const heading = document.createElement("h4");
    heading.textContent = label;
    slot.appendChild(heading);

    const frame = document.createElement("div");
    frame.className = "card-frame";

    const selected = state.selectedCards[index];
    if (selected) {
      const img = document.createElement("img");
      img.src = selected.card.image;
      img.alt = `${selected.card.name}`;
      frame.appendChild(img);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "card-placeholder";
      frame.appendChild(placeholder);
    }

    slot.appendChild(frame);

    if (selected) {
      const caption = document.createElement("p");
      caption.textContent = selected.card.ko_name;
      caption.style.margin = "0";
      caption.style.fontSize = "0.95rem";
      caption.style.color = "#f6c372";
      slot.appendChild(caption);
    }

    fragment.appendChild(slot);
  });

  container.innerHTML = "";
  container.appendChild(fragment);
}

function updatePickerInstruction() {
  const instructionEl = elements.drawing.positionInstruction;
  if (!instructionEl) return;

  const category = state.selectedCategory;
  if (!category) {
    instructionEl.textContent = "";
    return;
  }

  const nextIndex = state.selectedCards.length;

  if (nextIndex >= category.positions.length) {
    instructionEl.textContent = "모든 카드를 선택했습니다.";
    return;
  }

  const { label, prompt } = category.positions[nextIndex];
  instructionEl.innerHTML = `<strong>${label}</strong>${prompt || ""}`;
}

function updateDrawingStatus() {
  const category = state.selectedCategory;
  if (!category) return;

  elements.drawing.pickProgress.textContent = `${state.selectedCards.length} / ${category.requiredCards}장 선택`;
  elements.drawing.deckCount.textContent = `덱 ${state.deck.length}장 남음`;
}

function updateDrawingControls() {
  const category = state.selectedCategory;
  if (!category) return;

  const isComplete = state.selectedCards.length >= category.requiredCards;
  if (elements.drawing.openPicker) {
    elements.drawing.openPicker.disabled =
      isComplete || state.deck.length === 0;
  }
  if (elements.drawing.showResults) {
    elements.drawing.showResults.disabled = !isComplete;
  }
  if (elements.drawing.pickButton) {
    elements.drawing.pickButton.disabled =
      isComplete || state.deck.length === 0;
  }

  if (isComplete) {
    closeCardPicker();
  }

  updatePickerInstruction();
}

function handleKeyNavigation(event) {
  if (state.view !== "drawing") return;
  if (!elements.drawing.pickerDialog || !elements.drawing.pickerDialog.open) return;
  if (state.deck.length === 0) return;

  if (event.key === "ArrowRight") {
    const next = Math.min(state.currentIndex + 1, state.deck.length - 1);
    scrollToCard(next);
    event.preventDefault();
  } else if (event.key === "ArrowLeft") {
    const prev = Math.max(state.currentIndex - 1, 0);
    scrollToCard(prev);
    event.preventDefault();
  } else if ((event.key === "Enter" || event.key === " ") && !elements.drawing.pickButton?.disabled) {
    pickCurrentCard();
    event.preventDefault();
  }
}

function pickCurrentCard() {
  const category = state.selectedCategory;
  if (!category) return;
  if (state.deck.length === 0) return;
  if (state.selectedCards.length >= category.requiredCards) return;

  const card = state.deck.splice(state.currentIndex, 1)[0];
  if (!card) return;

  const positionInfo = category.positions[state.selectedCards.length];
  state.selectedCards.push({ position: positionInfo.label, card });

  if (state.deck.length === 0) {
    state.currentIndex = 0;
  } else if (state.currentIndex >= state.deck.length) {
    state.currentIndex = state.deck.length - 1;
  }

  renderCardOptions();
  renderSelectedPreview();
  updateDrawingStatus();
  updateDrawingControls();
  const categoryComplete =
    state.selectedCards.length >= category.requiredCards;

  if (categoryComplete) {
    elements.drawing.openPicker?.focus({ preventScroll: true });
  } else {
    requestAnimationFrame(() => {
      scrollToCard(state.currentIndex, "auto");
      elements.drawing.cardTrack?.focus({ preventScroll: true });
    });
  }
}

function showResults() {
  const category = state.selectedCategory;
  if (!category) return;
  if (state.selectedCards.length < category.requiredCards) return;

  renderResults(true);
  updateView("results");

  window.setTimeout(() => {
    renderResults(false);
  }, 1500);
}

function renderResults(isLoadingOnly = false) {
  const category = state.selectedCategory;
  if (!category) return;

  if (elements.results.loading) {
    if (isLoadingOnly) {
      elements.results.loading.classList.remove("hidden");
    } else {
      elements.results.loading.classList.add("hidden");
    }
  }

  if (isLoadingOnly) {
    return;
  }

  elements.results.title.textContent = `${category.label} 리딩 결과`;
  elements.results.description.textContent = category.resultDescription;

  const fragment = document.createDocumentFragment();
  state.selectedCards.forEach(({ position, card }) => {
    const article = document.createElement("article");
    article.className = "result-card";

    const heading = document.createElement("h4");
    heading.textContent = position;
    article.appendChild(heading);

    const frame = document.createElement("div");
    frame.className = "card-frame";
    const img = document.createElement("img");
    img.src = card.image;
    img.alt = card.name;
    frame.appendChild(img);
    article.appendChild(frame);

    const meta = document.createElement("div");
    meta.className = "card-meta";

    const name = document.createElement("p");
    name.textContent = `${card.name} (${card.ko_name})`;
    meta.appendChild(name);

    const keywords = document.createElement("p");
    keywords.className = "card-keywords";
    keywords.textContent = `키워드: ${card.keywords.join(", ")}`;
    meta.appendChild(keywords);

    const meaning = document.createElement("p");
    meaning.textContent = card.meaning;
    meta.appendChild(meaning);

    article.appendChild(meta);
    fragment.appendChild(article);
  });

  elements.results.cards.innerHTML = "";
  elements.results.cards.appendChild(fragment);

  const { segments, topKeywords } = generateOverallSummary(
    category,
    state.selectedCards
  );

  const summaryBody = elements.results.overallSummary;
  summaryBody.innerHTML = "";
  segments.forEach((segment) => {
    const p = document.createElement("p");
    if (segment.type === "warning") {
      const strong = document.createElement("strong");
      strong.textContent = "주의할 점: ";
      p.appendChild(strong);
      p.appendChild(document.createTextNode(segment.text));
    } else {
      p.textContent = segment.text || segment;
    }
    summaryBody.appendChild(p);
  });

  elements.results.keywordChips.innerHTML = "";
  topKeywords.forEach((keyword) => {
    const chip = document.createElement("span");
    chip.className = "keyword-chip";
    chip.textContent = keyword;
    elements.results.keywordChips.appendChild(chip);
  });
}

function generateOverallSummary(category, selections) {
  const total = selections.length;
  const segments = [];

  if (category.summaryIntro) {
    segments.push({ text: category.summaryIntro });
  }

  if (total === 0) {
    segments.push({ text: "카드를 더 뽑으면 이야기할 준비가 끝나요." });
    return { segments, topKeywords: [] };
  }

  const majors = selections.filter((entry) => entry.card.arcana === "Major")
    .length;

  if (majors === total) {
    segments.push({ text: "모든 카드가 메이저 카드예요. 올해는 큰 변화가 이어질 수 있어요." });
  } else if (majors > 0) {
    segments.push({ text: `메이저 카드가 ${majors}장 나와서 오래 기억할 순간도 함께 올 거예요.` });
  } else {
    segments.push({ text: "모두 마이너 카드라서 오늘 바로 실천할 행동이 중요해 보여요." });
  }

  const suitCounts = {
    Wands: 0,
    Cups: 0,
    Swords: 0,
    Pentacles: 0,
  };
  selections.forEach((entry) => {
    if (entry.card.arcana === "Minor") {
      suitCounts[entry.card.suit] += 1;
    }
  });

  const dominantSuit = Object.entries(suitCounts)
    .filter(([, count]) => count > 0)
    .sort((a, b) => b[1] - a[1])[0];

  if (dominantSuit) {
    const suitName = suitLabels[dominantSuit[0]] || dominantSuit[0];
    const suitMeaning = suitMeanings[dominantSuit[0]];
    segments.push({
      text: `${suitName} 카드가 가장 많이 나왔어요. ${suitMeaning}에 마음을 써 보세요.`,
    });
  } else {
    segments.push({ text: "네 가지 슈트가 비슷하게 나와서 균형을 잘 맞출 수 있어요." });
  }

  const keywords = selections.flatMap((entry) => entry.card.keywords);
  const topKeywords = extractTopKeywords(keywords);
  if (topKeywords.length > 0) {
    segments.push({ text: `자주 보인 키워드는 ${topKeywords.slice(0, 4).join(", ")} 입니다.` });
  }

  const cleanMeaning = (text) =>
    (text || "").replace(/["“”]/g, "").trim();

  const strengthCard = selections[0];
  if (strengthCard) {
    segments.push({
      text: `${strengthCard.position} 자리에서는 ${strengthCard.card.ko_name} 카드가 나왔어요. ${cleanMeaning(strengthCard.card.meaning)}`,
    });
  }

  const challengeCard = selections[1] && selections[1] !== strengthCard
    ? selections[1]
    : total > 1
      ? selections[selections.length - 1]
      : null;

  if (challengeCard && challengeCard !== strengthCard) {
    segments.push({
      text: `${challengeCard.position} 자리에서는 ${challengeCard.card.ko_name} 카드가 떠올랐어요. ${cleanMeaning(challengeCard.card.meaning)}`,
    });
  }

  const middleIndex = Math.floor(total / 2);
  const presentCard = selections[middleIndex];
  if (
    presentCard &&
    presentCard !== strengthCard &&
    presentCard !== challengeCard
  ) {
    segments.push({
      text: `${presentCard.position} 카드는 지금 집중해야 할 흐름을 보여줘요. ${cleanMeaning(presentCard.card.meaning)}`,
    });
  }

  const futureCard = selections[total - 1];
  if (
    futureCard &&
    futureCard !== presentCard &&
    futureCard !== strengthCard &&
    futureCard !== challengeCard
  ) {
    segments.push({
      text: `${futureCard.position} 카드는 다음 단계에서 준비할 내용을 알려줘요. ${cleanMeaning(futureCard.card.meaning)}`,
    });
  }

  if (challengeCard) {
    const warningKeywords = challengeCard.card.keywords.slice(0, 3).join(", ");
    segments.push({
      type: "warning",
      text: `${warningKeywords} 같은 상황이 과해지지 않도록 한 번 더 점검해 보세요.`,
    });
  }

  if (category.advice) {
    segments.push({ text: category.advice });
  }

  segments.push({ text: "마지막 선택은 언제나 당신 몫이에요. 마음이 편해지는 길을 고르세요." });

  return { segments, topKeywords };
}

function extractTopKeywords(keywords) {
  const frequency = new Map();
  keywords.forEach((keyword) => {
    const next = (frequency.get(keyword) || 0) + 1;
    frequency.set(keyword, next);
  });
  return Array.from(frequency.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([keyword]) => keyword)
    .slice(0, 6);
}

function updateView(nextView) {
  if (nextView !== "drawing" && state.scrollRAF) {
    cancelAnimationFrame(state.scrollRAF);
    state.scrollRAF = null;
  }
  if (nextView !== "drawing") {
    closeCardPicker();
  }
  state.view = nextView;
  Object.entries(elements.views).forEach(([viewName, element]) => {
    element.classList.toggle("active", viewName === nextView);
  });

  if (nextView === "landing") {
    elements.startButton.disabled = !state.selectedCategory;
  }
}

function resetAll() {
  closeIntroSequence();
  state.selectedCategory = null;
  state.selectedCards = [];
  state.deck = [];
  state.currentIndex = 0;
  state.cardButtons = [];
  state.scrollRAF = null;
  elements.dropdownLabel.textContent = "카테고리 선택";
  elements.startButton.disabled = true;
  updateSelectionSummary();
  updatePickerInstruction();
  updateView("landing");
}

function shuffle(array) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function normalizeIndex(index, length) {
  if (length === 0) return null;
  const modulo = ((index % length) + length) % length;
  return modulo;
}

function renderCardOptions() {
  const track = elements.drawing.cardTrack;
  if (!track) return;

  if (state.scrollRAF) {
    cancelAnimationFrame(state.scrollRAF);
    state.scrollRAF = null;
  }

  track.classList.remove("dragging");
  state.isDragging = false;
  state.dragStartX = 0;
  state.dragStartScrollLeft = 0;
  state.activePointerId = null;

  if (elements.drawing.pickerContainer) {
    elements.drawing.pickerContainer.scrollTop = 0;
  }

  track.innerHTML = "";
  state.cardButtons = [];

  if (state.deck.length === 0) {
    return;
  }

  const initialIndex = Math.min(
    Math.max(state.currentIndex, 0),
    Math.max(state.deck.length - 1, 0)
  );

  state.deck.forEach((_card, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "card-option";
    button.dataset.index = String(index);
    button.setAttribute("aria-label", `카드 ${index + 1}`);
    button.innerHTML = `<img src="image/0_Tarot_Card_Back.png" alt="카드 ${index + 1}" loading="lazy" />`;
    button.addEventListener("click", () => {
      scrollToCard(index);
    });
    state.cardButtons.push(button);
    track.appendChild(button);
  });

  setActiveCard(initialIndex);
  requestAnimationFrame(() => {
    scrollToCard(initialIndex, "auto");
  });
}

function scrollToCard(index, behavior = "smooth") {
  const track = elements.drawing.cardTrack;
  const button = state.cardButtons[index];
  if (!track || !button) return;
  const target =
    button.offsetLeft - (track.clientWidth - button.offsetWidth) / 2;
  const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
  const clamped = Math.min(maxScroll, Math.max(0, target));
  track.scrollTo({ left: clamped, behavior });
  setActiveCard(index);
}

function setActiveCard(index) {
  if (!state.cardButtons.length) return;
  const normalized = normalizeIndex(index, state.deck.length);
  if (normalized === null) return;
  state.currentIndex = normalized;
  state.cardButtons.forEach((button, idx) => {
    button.classList.toggle("active", idx === state.currentIndex);
  });
}

function handleTrackWheel(event) {
  if (state.view !== "drawing") return;
  if (!elements.drawing.pickerDialog?.open) return;
  const track = elements.drawing.cardTrack;
  if (!track) return;
  event.preventDefault();
  const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
    ? event.deltaX
    : event.deltaY;
  track.scrollLeft += delta;
  handleTrackScroll();
}

function handleTrackPointerDown(event) {
  if (event.pointerType === "mouse" && event.button !== 0) return;
  if (!beginTrackDrag(event.clientX, event.pointerId)) return;
  const track = elements.drawing.cardTrack;
  track?.setPointerCapture?.(event.pointerId);
  event.preventDefault();
}

function handleTrackPointerMove(event) {
  if (!state.isDragging) return;
  if (state.activePointerId !== null && event.pointerId !== state.activePointerId) {
    return;
  }
  updateTrackDrag(event.clientX);
  event.preventDefault();
}

function handleTrackPointerUp(event) {
  const track = elements.drawing.cardTrack;
  if (track?.hasPointerCapture?.(event.pointerId)) {
    track.releasePointerCapture(event.pointerId);
  }
  endTrackDrag(event.pointerId);
}

function handleTrackPointerCancel(event) {
  const track = elements.drawing.cardTrack;
  if (track?.hasPointerCapture?.(event.pointerId)) {
    track.releasePointerCapture(event.pointerId);
  }
  endTrackDrag(event.pointerId);
}

function handleTrackPointerLeave(event) {
  if (!state.isDragging) return;
  if (state.activePointerId !== null && event.pointerId !== state.activePointerId) {
    return;
  }
  endTrackDrag(event.pointerId);
}

function handleTrackTouchStart(event) {
  if (window.PointerEvent) return;
  const touch = event.touches[0];
  if (!touch) return;
  if (!beginTrackDrag(touch.clientX)) return;
  event.preventDefault();
}

function handleTrackTouchMove(event) {
  if (window.PointerEvent) return;
  if (!state.isDragging) return;
  const touch = event.touches[0];
  if (!touch) return;
  updateTrackDrag(touch.clientX);
  event.preventDefault();
}

function handleTrackTouchEnd() {
  if (window.PointerEvent) return;
  endTrackDrag();
}

function handleTrackScroll() {
  if (state.scrollRAF) {
    cancelAnimationFrame(state.scrollRAF);
  }
  state.scrollRAF = requestAnimationFrame(updateActiveCardFromScroll);
}

function updateActiveCardFromScroll() {
  state.scrollRAF = null;
  const track = elements.drawing.cardTrack;
  if (!track || !state.cardButtons.length) return;

  const center = track.scrollLeft + track.clientWidth / 2;
  let closestIndex = 0;
  let minDistance = Infinity;

  state.cardButtons.forEach((button, index) => {
    const buttonCenter = button.offsetLeft + button.offsetWidth / 2;
    const distance = Math.abs(buttonCenter - center);
    if (distance < minDistance) {
      minDistance = distance;
      closestIndex = index;
    }
  });

  setActiveCard(closestIndex);
}

function handleStartButtonClick() {
  if (!state.selectedCategory) return;
  const introShown = openIntroSequence();
  if (!introShown) {
    startDrawingPhase();
  }
}

function openIntroSequence() {
  const { dialog } = elements.intro;
  if (!dialog) {
    return false;
  }
  if (state.isIntroPlaying) {
    return true;
  }
  state.isIntroPlaying = true;
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
  if (state.introTimeoutId) {
    clearTimeout(state.introTimeoutId);
  }
  state.introTimeoutId = window.setTimeout(() => {
    handleIntroTimeout();
  }, 3600);
  return true;
}

function handleIntroTimeout() {
  if (!state.isIntroPlaying) return;
  closeIntroSequence();
  startDrawingPhase();
}

function handleIntroDismiss() {
  if (!state.selectedCategory) return;
  closeIntroSequence();
  startDrawingPhase();
}

function closeIntroSequence() {
  const { dialog } = elements.intro;
  state.isIntroPlaying = false;
  if (state.introTimeoutId) {
    clearTimeout(state.introTimeoutId);
    state.introTimeoutId = null;
  }
  if (dialog) {
    if (typeof dialog.close === "function") {
      if (dialog.open) {
        dialog.close();
      }
    } else {
      dialog.removeAttribute("open");
    }
  }
}

document.addEventListener("DOMContentLoaded", init);

