from __future__ import annotations

import json
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import List, Optional

try:
    from openpyxl import Workbook
except ModuleNotFoundError as exc:  # pragma: no cover - guidance for manual run
    raise SystemExit(
        "openpyxl 패키지가 필요합니다. `pip install openpyxl` 명령으로 설치한 뒤 다시 실행하세요."
    ) from exc


BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"
JSON_PATH = DATA_DIR / "cards.json"
XLSX_PATH = DATA_DIR / "card_meanings.xlsx"


@dataclass(frozen=True)
class TarotCard:
    card_id: str
    name: str
    ko_name: str
    arcana: str
    suit: str
    number: Optional[int]
    rank: Optional[str]
    element: Optional[str]
    keywords: List[str]
    meaning: str
    image: str


def build_cards() -> List[TarotCard]:
    majors = [
        TarotCard(
            card_id="major_00",
            name="The Fool",
            ko_name="바보",
            arcana="Major",
            suit="Major",
            number=0,
            rank=None,
            element="Air",
            keywords=["새로운 시작", "순수", "모험"],
            meaning=(
                "한 번도 가보지 않은 길 위에 서 있습니다. 두려움보다 설렘을 선택하면 예상치 못한 가능성이 열립니다."
            ),
            image="image/The_Fool.png",
        ),
        TarotCard(
            card_id="major_01",
            name="The Magician",
            ko_name="마법사",
            arcana="Major",
            suit="Major",
            number=1,
            rank=None,
            element="Air",
            keywords=["집중", "실행", "재능"],
            meaning="머릿속의 아이디어를 현실로 옮길 조건이 충분합니다. 자신감을 갖고 행동을 시작하세요.",
            image="image/The_Magician.png",
        ),
        TarotCard(
            card_id="major_02",
            name="The High Priestess",
            ko_name="여사제",
            arcana="Major",
            suit="Major",
            number=2,
            rank=None,
            element="Water",
            keywords=["직관", "비밀", "침묵"],
            meaning="겉으로 드러나지 않은 진실이 존재합니다. 조급함을 멈추고 내면의 목소리에 귀 기울이세요.",
            image="image/The_High_Priestess.png",
        ),
        TarotCard(
            card_id="major_03",
            name="The Empress",
            ko_name="여황제",
            arcana="Major",
            suit="Major",
            number=3,
            rank=None,
            element="Earth",
            keywords=["풍요", "창조", "돌봄"],
            meaning="따뜻한 돌봄과 창의력이 무르익는 시기입니다. 주변과의 관계를 보살필수록 더 큰 풍요가 찾아옵니다.",
            image="image/The_Empress.png",
        ),
        TarotCard(
            card_id="major_04",
            name="The Emperor",
            ko_name="황제",
            arcana="Major",
            suit="Major",
            number=4,
            rank=None,
            element="Fire",
            keywords=["구조", "리더십", "안정"],
            meaning="체계와 규칙이 상황을 안정시키는 열쇠입니다. 단호한 결정과 책임 있는 리더십이 요구됩니다.",
            image="image/The_Emperor.png",
        ),
        TarotCard(
            card_id="major_05",
            name="The Hierophant",
            ko_name="교황",
            arcana="Major",
            suit="Major",
            number=5,
            rank=None,
            element="Earth",
            keywords=["전통", "멘토", "배움"],
            meaning="검증된 지혜와 전통적인 방법을 통해 해답을 찾을 수 있습니다. 경험 많은 조언자를 찾아보세요.",
            image="image/The_Hierophant.png",
        ),
        TarotCard(
            card_id="major_06",
            name="The Lovers",
            ko_name="연인",
            arcana="Major",
            suit="Major",
            number=6,
            rank=None,
            element="Air",
            keywords=["관계", "선택", "조화"],
            meaning="마음을 열고 진정 원하는 것을 선택하세요. 조화를 이룰 수 있는 관계가 큰 힘을 줍니다.",
            image="image/The_Lovers.png",
        ),
        TarotCard(
            card_id="major_07",
            name="The Chariot",
            ko_name="전차",
            arcana="Major",
            suit="Major",
            number=7,
            rank=None,
            element="Water",
            keywords=["추진력", "승리", "집중"],
            meaning="의지를 하나로 모으면 장애물을 넘어설 수 있습니다. 흔들림 없이 목표를 향해 나아가세요.",
            image="image/The_Chariot.png",
        ),
        TarotCard(
            card_id="major_08",
            name="Strength",
            ko_name="힘",
            arcana="Major",
            suit="Major",
            number=8,
            rank=None,
            element="Fire",
            keywords=["용기", "자기조절", "연민"],
            meaning="부드러운 힘이 거친 에너지를 다스립니다. 인내와 연민이 상황을 변화시킵니다.",
            image="image/Strength.png",
        ),
        TarotCard(
            card_id="major_09",
            name="The Hermit",
            ko_name="은둔자",
            arcana="Major",
            suit="Major",
            number=9,
            rank=None,
            element="Earth",
            keywords=["탐구", "고독", "성찰"],
            meaning="혼자만의 시간이 필요합니다. 내면의 빛을 좇으며 본질적인 답을 찾으세요.",
            image="image/The_Hermit.png",
        ),
        TarotCard(
            card_id="major_10",
            name="Wheel of Fortune",
            ko_name="운명의 수레바퀴",
            arcana="Major",
            suit="Major",
            number=10,
            rank=None,
            element="Fire",
            keywords=["변화", "순환", "타이밍"],
            meaning="큰 흐름이 전환되고 있습니다. 변화의 리듬을 인식하면 유리한 타이밍을 잡을 수 있습니다.",
            image="image/Wheel_of_Fortune.png",
        ),
        TarotCard(
            card_id="major_11",
            name="Justice",
            ko_name="정의",
            arcana="Major",
            suit="Major",
            number=11,
            rank=None,
            element="Air",
            keywords=["균형", "공정", "결정"],
            meaning="사실과 책임을 바탕으로 판단해야 하는 순간입니다. 균형감을 잃지 마세요.",
            image="image/Justice.png",
        ),
        TarotCard(
            card_id="major_12",
            name="The Hanged Man",
            ko_name="매달린 남자",
            arcana="Major",
            suit="Major",
            number=12,
            rank=None,
            element="Water",
            keywords=["관점 전환", "멈춤", "헌신"],
            meaning="속도를 늦추고 시각을 바꾸면 해답이 보입니다. 잠시 멈춤이 성장을 준비합니다.",
            image="image/The_Hanged_Man.png",
        ),
        TarotCard(
            card_id="major_13",
            name="Death",
            ko_name="죽음",
            arcana="Major",
            suit="Major",
            number=13,
            rank=None,
            element="Water",
            keywords=["끝맺음", "변형", "재생"],
            meaning="더 이상 유효하지 않은 것을 놓아야 할 때입니다. 과감한 종결이 새로운 시작을 부릅니다.",
            image="image/Death.png",
        ),
        TarotCard(
            card_id="major_14",
            name="Temperance",
            ko_name="절제",
            arcana="Major",
            suit="Major",
            number=14,
            rank=None,
            element="Fire",
            keywords=["조화", "치유", "중용"],
            meaning="극단을 피하고 균형을 맞추면 자연스럽게 회복이 이뤄집니다. 섞고 기다리는 시간이 필요합니다.",
            image="image/Temperance.png",
        ),
        TarotCard(
            card_id="major_15",
            name="The Devil",
            ko_name="악마",
            arcana="Major",
            suit="Major",
            number=15,
            rank=None,
            element="Earth",
            keywords=["집착", "속박", "욕망"],
            meaning="무언가에 과하게 묶여 있지 않은지 돌아보세요. 의존을 끊을 의지가 필요합니다.",
            image="image/The_Devil.png",
        ),
        TarotCard(
            card_id="major_16",
            name="The Tower",
            ko_name="탑",
            arcana="Major",
            suit="Major",
            number=16,
            rank=None,
            element="Fire",
            keywords=["급변", "각성", "붕괴"],
            meaning="예상치 못한 사건이 기존 구조를 무너뜨릴 수 있습니다. 무너짐 속에서 진짜를 재건하세요.",
            image="image/The_Tower.png",
        ),
        TarotCard(
            card_id="major_17",
            name="The Star",
            ko_name="별",
            arcana="Major",
            suit="Major",
            number=17,
            rank=None,
            element="Air",
            keywords=["희망", "영감", "회복"],
            meaning="어두움 뒤에 별빛이 비추기 시작합니다. 꾸준히 진정성을 유지하면 기적이 다가옵니다.",
            image="image/The_Star.png",
        ),
        TarotCard(
            card_id="major_18",
            name="The Moon",
            ko_name="달",
            arcana="Major",
            suit="Major",
            number=18,
            rank=None,
            element="Water",
            keywords=["무의식", "불안", "상상"],
            meaning="불확실한 감정이 올라올 수 있습니다. 사실 확인과 직관 사이의 균형이 필요합니다.",
            image="image/The_Moon.png",
        ),
        TarotCard(
            card_id="major_19",
            name="The Sun",
            ko_name="태양",
            arcana="Major",
            suit="Major",
            number=19,
            rank=None,
            element="Fire",
            keywords=["성취", "명료함", "생동감"],
            meaning="빛나는 자신감과 기쁨이 가득합니다. 솔직하고 명확한 표현이 성과를 높입니다.",
            image="image/The_Sun.png",
        ),
        TarotCard(
            card_id="major_20",
            name="Judgement",
            ko_name="심판",
            arcana="Major",
            suit="Major",
            number=20,
            rank=None,
            element="Fire",
            keywords=["각성", "재평가", "부름"],
            meaning="과거를 돌아보고 새롭게 부름을 받는 시점입니다. 중요한 결단이 다가옵니다.",
            image="image/Judgement.png",
        ),
        TarotCard(
            card_id="major_21",
            name="The World",
            ko_name="세계",
            arcana="Major",
            suit="Major",
            number=21,
            rank=None,
            element="Earth",
            keywords=["완성", "통합", "새 출발"],
            meaning="하나의 커다란 순환이 완성되었습니다. 새로운 단계로 도약할 준비를 마쳤습니다.",
            image="image/The_World.png",
        ),
    ]

    def minor_card(suit: str, rank: str, number: int, keywords: List[str], meaning: str) -> TarotCard:
        filename = f"image/{suit}_{rank}.png"
        element_map = {
            "Wands": "Fire",
            "Cups": "Water",
            "Swords": "Air",
            "Pentacles": "Earth",
        }
        suit_names_ko = {
            "Wands": "완드",
            "Cups": "컵",
            "Swords": "소드",
            "Pentacles": "펜타클",
        }
        rank_names_ko = {
            "Ace": "에이스",
            "Two": "2",
            "Three": "3",
            "Four": "4",
            "Five": "5",
            "Six": "6",
            "Seven": "7",
            "Eight": "8",
            "Nine": "9",
            "Ten": "10",
            "Page": "시종",
            "Knight": "기사",
            "Queen": "여왕",
            "King": "왕",
        }
        return TarotCard(
            card_id=f"{suit.lower()}_{rank.lower()}",
            name=f"{rank} of {suit}",
            ko_name=f"{suit_names_ko[suit]} {rank_names_ko[rank]}",
            arcana="Minor",
            suit=suit,
            number=number,
            rank=rank,
            element=element_map[suit],
            keywords=keywords,
            meaning=meaning,
            image=filename,
        )

    minors: List[TarotCard] = []
    minors.extend(
        [
            minor_card("Wands", "Ace", 1, ["영감", "시작", "열정"], "불꽃 같은 의지와 창조적 에너지가 막 피어납니다."),
            minor_card("Wands", "Two", 2, ["계획", "전망", "선택"], "이미 이룬 성과 위에서 다음 목표를 계획할 때입니다."),
            minor_card("Wands", "Three", 3, ["확장", "도전", "기대"], "시야를 넓히고 새로운 도전에 나설 준비가 되었습니다."),
            minor_card("Wands", "Four", 4, ["안정", "축하", "기반"], "그동안의 노력이 안정적인 기반을 만들었습니다."),
            minor_card("Wands", "Five", 5, ["경쟁", "갈등", "연습"], "경쟁 속에서 실력을 다듬어야 하는 시기입니다."),
            minor_card("Wands", "Six", 6, ["승리", "인정", "리더십"], "주변의 인정을 받는 승리의 순간입니다."),
            minor_card("Wands", "Seven", 7, ["수호", "대립", "용기"], "자신의 입장을 지키기 위해 굳건한 태도가 필요합니다."),
            minor_card("Wands", "Eight", 8, ["가속", "소통", "진전"], "일이 빠르게 전개됩니다. 기회를 놓치지 마세요."),
            minor_card("Wands", "Nine", 9, ["인내", "경계", "회복"], "곧 끝이 보이지만 다시 마음을 다잡아야 합니다."),
            minor_card("Wands", "Ten", 10, ["부담", "책임", "완성"], "많은 짐을 짊어졌지만 목표 달성이 가까워졌습니다."),
            minor_card("Wands", "Page", 11, ["호기심", "학습", "메시지"], "새로운 아이디어와 기회가 문을 두드립니다."),
            minor_card("Wands", "Knight", 12, ["에너지", "모험", "추진"], "대담한 행동이 변화를 일으킵니다. 다만 무모함을 주의하세요."),
            minor_card("Wands", "Queen", 13, ["카리스마", "창조성", "포용"], "열정과 따뜻함으로 사람들을 이끌 수 있습니다."),
            minor_card("Wands", "King", 14, ["리더십", "비전", "영향력"], "비전을 현실로 만드는 전략가적 리더십이 빛납니다."),
        ]
    )
    minors.extend(
        [
            minor_card("Cups", "Ace", 1, ["감정", "직관", "새 관계"], "마음을 여는 새로운 감정의 씨앗이 싹트고 있습니다."),
            minor_card("Cups", "Two", 2, ["파트너십", "조화", "공감"], "진실한 감정을 나누는 연결이 형성됩니다."),
            minor_card("Cups", "Three", 3, ["축하", "우정", "공동체"], "함께 기쁨을 나눌 사람들과의 시간이 다가옵니다."),
            minor_card("Cups", "Four", 4, ["권태", "재평가", "내면 집중"], "현재에 만족하지 못한다면 다른 가능성을 살펴보세요."),
            minor_card("Cups", "Five", 5, ["실망", "상실", "배움"], "아쉬움 속에서도 남아 있는 가능성에 주목해야 합니다."),
            minor_card("Cups", "Six", 6, ["추억", "순수", "돌봄"], "따뜻한 기억과 돌봄이 마음을 채워줍니다."),
            minor_card("Cups", "Seven", 7, ["환상", "선택", "망설임"], "선택지가 많아 흐려진 시야를 다잡아야 합니다."),
            minor_card("Cups", "Eight", 8, ["결단", "떠남", "새 여정"], "더 나은 것을 찾아 과감히 뒤를 돌아서야 할 때입니다."),
            minor_card("Cups", "Nine", 9, ["성취", "만족", "감사"], "바람이 이루어지는 만족감이 가득합니다."),
            minor_card("Cups", "Ten", 10, ["완성", "조화", "행복"], "가족과 공동체 안에서 조화로운 행복을 누립니다."),
            minor_card("Cups", "Page", 11, ["감수성", "메시지", "창의력"], "감정의 소식이나 창의적인 영감이 찾아옵니다."),
            minor_card("Cups", "Knight", 12, ["로맨스", "사명감", "여정"], "감정이 이끄는 방향으로 진심을 전하세요."),
            minor_card("Cups", "Queen", 13, ["공감", "돌봄", "직관"], "다른 이의 감정을 포용하며 신중한 직감을 발휘합니다."),
            minor_card("Cups", "King", 14, ["성숙", "감정 리더십", "치유"], "감정의 균형을 유지하며 현명하게 상황을 이끕니다."),
        ]
    )
    minors.extend(
        [
            minor_card("Swords", "Ace", 1, ["결단", "진실", "명확"], "머릿속이 선명해지며 통찰이 번뜩입니다."),
            minor_card("Swords", "Two", 2, ["중립", "갈등 완화", "균형"], "판단을 미루고 정보를 더 수집해야 합니다."),
            minor_card("Swords", "Three", 3, ["상처", "이별", "통찰"], "불편한 진실을 마주하지만 회복의 첫걸음입니다."),
            minor_card("Swords", "Four", 4, ["휴식", "회복", "정비"], "잠시 휴식하며 정신적 에너지를 재충전하세요."),
            minor_card("Swords", "Five", 5, ["승부", "긴장", "믿음 상실"], "이기는 것만이 답이 아닐 수 있습니다. 관계에 미칠 영향을 고려하세요."),
            minor_card("Swords", "Six", 6, ["이동", "전환", "조용한 변화"], "조용히 더 나은 환경을 향해 이동 중입니다."),
            minor_card("Swords", "Seven", 7, ["전략", "은밀함", "자율"], "독자적으로 문제를 해결할 계획이 필요합니다."),
            minor_card("Swords", "Eight", 8, ["제약", "두려움", "자기 검열"], "스스로 만든 제한에서 벗어나야 합니다."),
            minor_card("Swords", "Nine", 9, ["불안", "후회", "악몽"], "걱정이 과도할 수 있습니다. 사실을 점검하고 도움을 요청하세요."),
            minor_card("Swords", "Ten", 10, ["완전한 끝", "해방", "새벽"], "고통스럽지만 분명한 끝맺음이 찾아옵니다."),
            minor_card("Swords", "Page", 11, ["호기심", "지성", "감시"], "새로운 정보와 아이디어를 포착하는 예리함이 필요합니다."),
            minor_card("Swords", "Knight", 12, ["돌진", "논리", "단호함"], "빠른 판단과 행동이 요구되지만 충돌을 주의하세요."),
            minor_card("Swords", "Queen", 13, ["통찰", "진실성", "독립"], "감정에 휘둘리지 않고 명확한 사고로 상황을 이끕니다."),
            minor_card("Swords", "King", 14, ["권위", "전략", "정의"], "큰 그림을 꿰뚫는 분석력과 전략이 돋보입니다."),
        ]
    )
    minors.extend(
        [
            minor_card("Pentacles", "Ace", 1, ["기회", "현실화", "안정"], "물질적·실질적 기회의 씨앗이 심어졌습니다."),
            minor_card("Pentacles", "Two", 2, ["균형", "우선순위", "융통성"], "여러 일을 동시에 조율해야 하는 시기입니다."),
            minor_card("Pentacles", "Three", 3, ["협업", "숙련", "도제"], "협력과 전문성이 결합해 성장을 이끌어냅니다."),
            minor_card("Pentacles", "Four", 4, ["보유", "안전", "집착"], "너무 움켜쥐면 흐름이 막힐 수 있습니다. 적절한 교환을 생각하세요."),
            minor_card("Pentacles", "Five", 5, ["결핍", "도전", "연대"], "어려움 속에서도 서로 기대면 출구가 보입니다."),
            minor_card("Pentacles", "Six", 6, ["나눔", "균형", "서포트"], "정당한 교환과 도움을 통해 균형을 맞춥니다."),
            minor_card("Pentacles", "Seven", 7, ["평가", "참을성", "성장"], "성과가 서서히 나타나고 있습니다. 꾸준함이 필요합니다."),
            minor_card("Pentacles", "Eight", 8, ["연습", "기술", "몰입"], "세심한 집중과 반복이 실력을 완성합니다."),
            minor_card("Pentacles", "Nine", 9, ["성과", "자립", "풍요"], "독립적으로 얻은 성취와 여유를 즐길 때입니다."),
            minor_card("Pentacles", "Ten", 10, ["유산", "안정", "장기 계획"], "장기적 안정과 가족적 유산을 위한 기반이 구축됩니다."),
            minor_card("Pentacles", "Page", 11, ["실용적 소식", "계획", "학습"], "실무적인 아이디어와 학습 기회가 찾아옵니다."),
            minor_card("Pentacles", "Knight", 12, ["성실", "꾸준함", "지속"], "느리지만 확실한 진전을 위해 성실하게 움직이세요."),
            minor_card("Pentacles", "Queen", 13, ["현실감", "양육", "안정감"], "실용적인 돌봄과 자원 관리를 통해 풍요를 나눕니다."),
            minor_card("Pentacles", "King", 14, ["사업감각", "안정", "책임"], "장기적 안목과 책임감 있는 리더십으로 자원을 관리합니다."),
        ]
    )

    return majors + minors


def export_json(cards: List[TarotCard]) -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    with JSON_PATH.open("w", encoding="utf-8") as fp:
        json.dump([asdict(card) for card in cards], fp, ensure_ascii=False, indent=2)


def export_excel(cards: List[TarotCard]) -> None:
    workbook = Workbook()
    sheet = workbook.active
    sheet.title = "Tarot Cards"

    headers = [
        "card_id",
        "name",
        "ko_name",
        "arcana",
        "suit",
        "number",
        "rank",
        "element",
        "keywords",
        "meaning",
        "image",
    ]
    sheet.append(headers)

    for card in cards:
        row = [
            card.card_id,
            card.name,
            card.ko_name,
            card.arcana,
            card.suit,
            card.number,
            card.rank,
            card.element,
            ", ".join(card.keywords),
            card.meaning,
            card.image,
        ]
        sheet.append(row)

    DATA_DIR.mkdir(parents=True, exist_ok=True)
    workbook.save(XLSX_PATH)


def main() -> None:
    cards = build_cards()
    export_json(cards)
    export_excel(cards)
    print(f"Generated {len(cards)} cards -> {JSON_PATH.relative_to(BASE_DIR)} / {XLSX_PATH.relative_to(BASE_DIR)}")


if __name__ == "__main__":
    main()

