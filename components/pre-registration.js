import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Bullet from "./bullet";

export default function PreRegistraction() {

  const router = useRouter();

  const personAge = [
    {age:"20대", num:"01"}, 
    {age:"30대", num:"02"}, 
    {age:"40대", num:"03"}, 
    {age:"50대", num:"04"}, 
    {age:"60대", num:"05"}, 
  ]

  const personArea = [
    {area:"서울", num:"01"}, 
    {area:"수원", num:"02"}, 
    {area:"용인", num:"03"}, 
    {area:"안양", num:"04"}, 
    {area:"동탄", num:"05"}, 
    {area:"성남", num:"06"}, 
    {area:"안산", num:"07"}, 
    {area:"오산", num:"08"}, 
    {area:"평택", num:"09"}, 
    {area:"기타", num:"10"}, 
  ]

  const visitRoute = [
    {root:"TV 광고", num:"01"},
    {root:"카페 광고", num:"02"},
    {root:"블로그 광고", num:"03"},
    {root:"신문 광고", num:"04"},
    {root:"현수막", num:"05"},
    {root:"포털사이트 배너", num:"06"},
    {root:"지하철 광고", num:"07"},
    {root:"전광판", num:"08"},
    {root:"아파트 전단지", num:"09"},
    {root:"문자", num:"10"},
    {root:"지인 소개", num:"11"},
    {root:"초대장", num:"12"},
    {root:"SNS 광고", num:"13"},
    {root:"라디오 광고", num:"14"},
  ]

  const person = [
    `[개인정보 취급방침]
    네모전람㈜('http://www.nemofurn.co.kr’ 이하 '네모전람')은 개인정보보호법에 따라 이용자의 개인정보 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
    ‘네모전람’은 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.
    
    ○ 본 방침은 2019년 8월 15일부터 시행됩니다.
    
    1. 수집하는 개인정보 항목
    ‘네모전람’은 전시회 사전등록, 회원가입, 출품상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
    <회원가입 필수항목>
    개인의 경우 : 이름, 이메일, 휴대폰번호
    기업의 경우 : 기업명, 대표자명, 사업자등록번호, 업종, 업태, 주소, 대표홈페이지, 담당자이름·직책, 직통번호, 휴대폰번호, 팩스번호, 이메일
    
    2. 개인정보의 처리 목적
    ‘네모전람’은 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전 동의를 구할 예정입니다.
    가. 전시회 사전등록 및 전시출품신청
    사전등록 확인, 안내서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정이용 방지, 각종 고지·통지 등을 목적으로 개인정보를 처리합니다.
    나. 민원사무 
    처리민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.
    다. 재화 또는 서비스 제공 
    서비스 제공, 콘텐츠 제공 등을 목적으로 개인정보를 처리합니다.
    라. 마케팅 및 광고 활용 
    신규 서비스 개발 및 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.
    
    3. 개인정보의 보유 및 이용기간
    가. ‘네모전람’은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보와 이용기간 내에서 개인정보를 처리·보유합니다.
    나. 원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원 정보를 보관합니다.
    ① 보존 항목 : 이름, 연령, 성별, 지역, 회사명, 부서, 직책, 휴대전화번호, 회사전화번호, 팩스, e메일
    시스템 이용과정이나 데이터 처리 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.
    - 개인정보 등록 일시, 부스 방문시간 등 서비스 이용 기록
    ② 보존 근거 : 서비스 개선, 기획, 조사
    ③ 보존 기간 : 2년
    
    4. 수집하는 개인정보의 보유 및 이용기간
    이용자가 ‘네모전람’ 회원으로서 회사에 제공하는 서비스를 이용하는 동안 ‘네모전람’은 이용자들의 개인정보를 계속적으로 보유하며 서비스 제공 등을 위해 이용합니다. 다만, 아래의 "6. 이용자 자신의 개인정보관리(열람,정정,삭제 등)에 관한 사항" 에서 설명한 절차와 방법에 따라 회원 본인이 직접 삭제하거나 수정한 정보, 가입해지를 요청한 경우에는 재생할 수 없는 방법에 의하여 디스크에서 완전히 삭제하며 추후 열람이나 이용이 불가능한 상태로 처리됩니다.
    그리고 "3. 수집하는 개인정보 항목 및 수집방법"에서와 같이 일시적인 목적 (설문조사, 이벤트, 본인확인 등)으로 입력 받은 개인정보는 그 목적이 달성된 이후에는 동일한 방법으로 사후 재생이 불가능한 상태로 처리됩니다.
    귀하의 개인정보는 다음과 같이 개인정보의 수집목적 또는 제공받은 목적이 달성되면 파기하는 것을 원칙으로 합니다.
    그리고 상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 '네모전람'은 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 ‘네모전람’은 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.
    -	계약 또는 청약철회 등에 관한 기록 : 5년
    -	대금결제 및 재화 등의 공급에 관한 기록 : 5년
    -	소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
    '네모전람'은 귀중한 회원의 개인정보를 안전하게 처리하며, 유출의 방지를 위하여 다음과 같은 방법을 통하여 개인정보를 파기합니다.
    -	종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
    -	전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
     
    5. 수집한 개인정보의 공유 및 제공
    '네모전람'은 이용자들의 개인정보를 "2. 개인정보의 수집목적 및 이용목적"에서 고지한 범위 내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
    -	이용자들이 사전에 공개에 동의한 경우
    -	서비스 제공에 따른 요금정산을 위하여 필요한 경우
    -	홈페이지에 게시한 서비스 이용 약관 및 기타 회원 서비스 등의 이용약관 또는 운영원칙을 위반한 경우
    -	자사 서비스를 이용하여 타인에게 정신적, 물질적 피해를 줌으로써 그에 대한 법적인 조치를 취하기 위하여 개인정보를 공개해야 한다고 판단되는 충분한 근거가 있는 경우
    -	기타 법에 의해 요구된다고 선의로 판단되는 경우 (ex. 관련법에 의거 적법한 절차에 의한 정부/수사기관의 요청이 있는 경우 등)
    -	통계작성, 학술연구나 시장조사를 위하여 특정 개인을 식별할 수 없는 형태로 광고주, 협력업체나 연구단체 등에 제공하는 경우
    -	이용자의 서비스 이용에 따른 불만사항 및 문의사항(민원사항)의 처리를 위하여 고객센터를 위탁하는 경우
    -	고객센터를 운영하는 전문업체에 해당 민원사항의 처리에 필요한 개인 정보를 제공하는 경우
    
    6. 이용자 자신의 개인정보 관리(열람, 정정, 삭제 등)에 관한 사항
    회원님이 원하실 경우 언제라도 당사에서 개인정보를 열람하실 수 있으며 보관된 필수 정보를 수정하실 수 있습니다. 또한 회원 가입 시 요구된 필수 정보 외의 추가 정보는 언제나 열람, 수정, 삭제할 수 있습니다.
    회원님의 개인정보 변경 및 삭제와 회원탈퇴는 당사의 고객센터에서 로그인(Login) 후 이용하실 수 있습니다.
    
    7. 쿠키(cookie)의 운영에 관한 사항
    당사는 회원인증을 위하여 Cookie 방식을 이용하고 있습니다. 이는 로그아웃(Logout)시 자동으로 컴퓨터에 저장되지 않고 삭제되도록 되어 있으므로 공공장소나 타인이 사용할 수 있는 컴퓨터를 사용 하 실 경우에는 로그인(Login)후 서비스 이용이 끝나시면 반드시 로그아웃(Logout)해 주시기 바랍니다.
    쿠키 설정 거부 방법
    쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
    - 설정방법 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의 도구 > 인터넷 옵션 > 개인정보
    - 단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.
    
    8. 비회원고객의 개인정보관리
    당사는 비회원 고객 또한 물품 및 서비스 상품의 구매를 하실 수 있습니다. 당사는 비회원 주문의 경우 배송 및 대금 결제, 상품 배송에 반드시 필요한 개인정보만을 고객님께 요청하고 있습니다.
    당사에서 비회원으로 구입을 하신 경우 비회원 고객께서 입력하신 지불인 정보 및 수령인 정보는 대금 결제 및 상품 배송에 관련한 용도 외에는 다른 어떠한 용도로도 사용되지 않습니다.
    
    9. 개인정보의 위탁처리
    '네모전람'은 서비스 향상을 위해서 귀하의 개인정보를 필요한 경우 동의 등 법률상의 요건을 구비하여 외부에 수집 · 취급 · 관리 등을 위탁하여 처리할 있으며, 제3자에게 제공할 수 있습니다.
    당사는 개인정보의 처리와 관련하여 아래와 같이 업무를 위탁하고 있으며, 관계 법령에 따라 위탁계약 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다. 또한 공유하는 정보는 당해 목적을 달성하기 위하여 필요한 최소한의 정보에 국한됩니다.
    - 위탁 대상자 : [택배사 이름]
    - 위탁업무 내용 : [택배사 위탁 내용]
    - 위탁 대상자 : [PG사 이름]
    - 위탁업무 내용 : [PG사 위탁 내용]
    
    10. 개인정보관련 의견수렴 및 불만처리에 관한 사항
    당사는 개인정보보호와 관련하여 이용자 여러분들의 의견을 수렴하고 있으며 불만을 처리하기 위하여 모든 절차와 방법을 마련하고 있습니다. 이용자들은 하단에 명시한 "11. 개인정보관리책임자 및 담당자의 소속-성명 및 연락처"항을 참고하여 전화나 메일을 통하여 불만사항을 신고할 수 있고, ‘네모전람’은 이용자들의 신고사항에 대하여 신속하고도 충분한 답변을 해 드릴 것입니다.
    
    11. 개인정보 관리책임자 및 담당자의 소속-성명 및 연락처
    당사는 귀하가 좋은 정보를 안전하게 이용할 수 있도록 최선을 다하고 있습니다. 개인정보를 보호하는데 있어 귀하께 고지한 사항들에 반하는 사고가 발생할 경우 개인정보관리책임자가 책임을 집니다.
    이용자 개인정보와 관련한 아이디(ID)의 비밀번호에 대한 보안유지책임은 해당 이용자 자신에게 있습니다.
    '네모전람'은 비밀번호에 대해 어떠한 방법으로도 이용자에게 직접적으로 질문하는 경우는 없으므로 타인에게 비밀번호가 유출되지 않도록 각별히 주의하시기 바랍니다.
    특히 공공장소에서 온라인상에서 접속해 있을 경우에는 더욱 유의하셔야 합니다.
    '네모전람'은 개인정보에 대한 의견수렴 및 불만처리를 담당하는 개인정보 관리책임자 및 담당자를 지정하고 있고, 연락처는 아래와 같습니다.
    - 이 름 : 나필성
    - 소속/직위 : 전시팀 / 개인정보관리책임자
    - E-M A I L : deco@nemofairs.com
    - 전 화 번 호 : 02-786-9231
    
    12. 고지의 의무
    현 개인정보취급방침의 내용은 정부의 정책 또는 보안기술의 변경에 따라 내용의 추가 삭제 및 수정이 있을 시에는 홈페이지의 '공지사항'을 통해 고지할 것입니다.
    
    `
  ]

  const person2 = [
    `[개인정보 수집 및 이용에 관한 동의]

    <br>

    1. 개인정보 활용
    네모전람㈜('http://www.nemofurn.co.kr’ 이하 '네모전람')는 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.
    ‘네모전람’은 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 회사는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.
    
    2. 개인정보의 수집 및 이용목적
    '네모전람'은 수집한 개인정보를 다음의 목적을 위해 활용합니다.
    -	박람회 관람과 관련된 본인확인, 관람안내, 차기 박람회 정보제공
    -	‘네모전람’ 주최 전시회 안내
    -	박람회 정보발송 – e메일, SMS
    
    3. 수집하는 개인정보 항목
    '네모전람'은 관람 사전등록 및 확인, 박람회 서비스 개선 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
    -	수집항목 : 이름, 성별, 생년월일, 휴대전화번호, 이메일, 회사명(선택)
    -	개인정보 수집방법 : 홈페이지 참관객 사전등록, 참가업체등록
    
    4. 개인정보의 보유 및 이용기간
    원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 '네모전람'은 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
    -	보존 항목 : 이름, 연령, 성별, 지역, 회사명, 부서, 직책, 휴대전화번호, 회사전화번호, 팩스, e메일
    시스템 이용과정이나 데이터 처리 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.
    -	개인정보 등록일시, 부스 방문시간 등 서비스 이용 기록
    -	보존 근거 : 서비스 개선, 기획, 조사
    -	보존 기간 : 2년
    
    5. 권리
    원칙적으로 개인정보 보호법에 의해 개인정보 수집 동의를 거부할 권리가 있으며, 수집 동의 거부 시에는 박람회장 입장이 제한될 수 있습니다.
    `
  ]

  const nameRef = useRef("");
  const [gender, setGender] = useState("");
  const phoneRef = useRef("");
  const [age, setAge] = useState("");
  const [area, setArea] = useState("");
  const [root, setRoot] = useState("");
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  

  const checkedGender = (e) => {
    setGender(e.target.value);
  }

  const checkedAge = (e) => {
    setAge(e.target.value);
  }

  const checkedArea = (e) => {
    setArea(e.target.value);
  }

  const checkedRoot = (e) => {
    setRoot(e.target.value);
  }

  const checkedAgree1 = (e) => {
    setAgree1(true);
  }

  const checkedAgree2 = (e) => {
    setAgree2(true);
  }

  const submit = () => {

    const userInfo = {
      "name" : nameRef.current.value,
      "gender" : gender,
      "phone" : phoneRef.current.value,
      "age" : age,
      "address" : area,
      "root" : root
    };

    if (agree1 && agree2 === true) {

      if (userInfo.name && userInfo.gender && userInfo.phone && userInfo.age && userInfo.address && userInfo.root !== "") {
        

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/regist/create`, {
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userInfo),
        }).then(Response => Response.json())
        .then(data => {
          if (data.data.code === "PR200") {
            window.alert("정상적으로 사전 등록이 완료되었습니다.");
            router.replace("/");
            
          }
        });

      } else {
        return window.alert("전부 채워 주세요.")
      }
      
    } else {

      return window.alert("개인정보 수집 약관에 동의해 주세요.")
      
    }

   


    
    console.log(userInfo);

  }



  return(
    <>
    <div className="personal-wrap">
      <div className="personal-info">
        <div className="rule">
        <Bullet text="개인정보 수집 및 이용규칙"/>
        <hr />
        <div className="div-scroll">
          {person}
        </div>
        <div className="agree-check">
        <input type="checkbox" onChange={checkedAgree1}></input>
        <span>동의</span>
        </div>
        </div>
        <div className="agree">
        <Bullet text="개인정보 수집 및 이용에 관한 동의"/>
        <hr />
        <div className="div-scroll">
          {person2}
        </div>
        <div className="agree-check">
        <input type="checkbox" onChange={checkedAgree2}></input>
        <span>동의</span>
        </div>
        </div>
      </div>
      <div className="personal-input">
      <Bullet text="개인정보입력"/>
      <hr />

      <div className="personal-input-box">
      
      <label>
        <span className="label-title">성명<span id="star">*</span></span>
        <input type="text"
        className="label-input"
        ref={nameRef}
        placeholder="이름을 입력해 주세요." />
      </label>

      <label>
        <span className="label-title">성별<span id="star">*</span></span>
        <div className="check-box">
        <input type="radio" name="gender" value="01" onChange={checkedGender}/><span>남성</span>
        <input type="radio" name="gender" value="02" onChange={checkedGender}/><span>여성</span>
        </div>
      </label>

      <label>
        <span className="label-title">휴대폰 번호<span id="star">*</span></span>
        <input type="text"
        className="label-input"
        ref={phoneRef}
        maxLength="11"
        placeholder="-를 빼고 기재해 주세요." />
      </label>

      <label>
        <span className="label-title">연령대<span id="star">*</span></span>
        <div className="check-box">
        {personAge.map(age => (
          <>
          <div className="check-div">
          <input type="radio" name="age" value={age.num} onChange={checkedAge}/><span>{age.age}</span>
          </div>
          </>
        ))}
        </div>
      </label>

      <label>
        <span className="label-title">거주 지역<span id="star">*</span></span>
        <div className="check-box">
        {personArea.map(area => (
          <>
          <div className="check-div">
          <input type="radio" name="area" value={area.num} onChange={checkedArea}/><span>{area.area}</span>
          </div>
          </>
        ))}
        </div>
      </label>

      <label>
        <span className="label-title">방문 경로<span id="star">*</span></span>
        <div className="check-box">
        {visitRoute.map(route => (
          <>
          <div className="check-div">
          <input type="radio" name="root" value={route.num} onChange={checkedRoot}/><span>{route.root}</span>
          </div>
          </>
        ))}
        </div>
      </label>
      </div>
      <div className="ask-box">
        <p>관련 문의 <span>네모전람 deco@nemofairs.com</span></p> <span>02-786-9231</span>
      </div>
      <div className="submit">
      <button onClick={submit}>사전 등록 신청 (클릭)</button>
      <span>*이미 등록 하셨나요?</span>
      <Link href="/suwon/visitors/visit_check">
      <p>사전 등록 조회</p>
      </Link>
      </div>
      </div>
    </div>

    <style jsx>
      {`
      .personal-wrap {
        background-color:#fff;
        display:flex;
        justify-content:space-between;
        width:80%;
      }

      .personal-wrap>div {
        width:46%;
      }

      .personal-info {
        display:flex;
        flex-direction:column;
      }

      .rule {
        display:flex;
        flex-direction:column;
      }

      hr {
        width:100%;
      }

      .div-scroll {
        width:95%; 
        height:200px;
        overflow:auto;
        text-align:justify;
        margin:20px 20px;
      }

      .agree-check {
        display:flex;
        justify-content:end;
        gap:5px;
        padding-right:10px;
      }

      .personal-input {
        display:flex;
        flex-direction:column;
      }

      .personal-input-box {
        display:flex;
        flex-direction:column;
        align-content:space-between;
        gap:20px 0;
        padding:20px 20px 40px 20px;
        border-bottom:1px solid #ccc;
      }

      label {
        width:100%;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
      }

      .label-title {
        width:20%;
        font-size:1.1rem;
        font-weight:bold;
      }



      .label-input {
        width: 75%;
      }

      .check-box {
        width:75%;
        display:flex;
        flex-wrap:wrap;
      }

      .check-box span {
        margin:0 6px 0 1px;
      }

      input[type="text"] {
        height:40px;
        padding:10px;
        border:1px solid #ccc;
      }

      .ask-box {
        display:flex;
        width:100%;
        padding:20px 0;
      }

      .ask-box p {
        width:80%;
        border-right:2px solid #5e5e5e;
        font-weight:bold;
        margin-right:10px;
      }

      .ask-box span {
        font-weight:normal;
        color:#5e5e5e;
      }

      .submit {
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-top:20px;
        gap:5px;
      }

      button {
        width:60%;
        font-size:1.2rem;
        font-weight:bold;
        height:50px;
      }

      .submit span {
        color:#a2a2a2;
        font-size:0.8rem;
      }

      .submit p {
        text-decoration:underline;
        cursor:pointer;
        font-size:1.1rem;
        margin-top:10px;

      }




      `}
    </style>


    </>
  )

}

export async function checkBtn() {


  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/regist/chk`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  }).then(Response => Response.json())
  .then(data => console.log(data.data));
}