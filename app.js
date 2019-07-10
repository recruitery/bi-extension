// Insert jquery to console:
//  var script = document.createElement('script');script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(script);

// [attribute~="value"] attribute value containing a specified word.
// [attribute|="value"] attribute starting with the specified value.
// [attribute^="value"] attribute value begins with a specified value.
// [attribute$="value"] attribute value ends with a specified value.
// [attribute*="value"] attribute value contains a specified value.

/******************************
 * ADD GOOGLE CALENDAR BUTTON *
 ******************************/

console.log('====== START APP =====');

const queryResultArrived = '.CardVisualization table > thead > tr > th';
const queryRecord = '.CardVisualization table tbody tr';
const patternCalendar = 'Ptn Schedule Interview';
const patternNewsletter = 'Ptn Newsletter';
const date = new Date();
const dd = ("0" + date.getDate()).slice(-2);
const mm = ("0" + (date.getMonth() + 1)).slice(-2);
const gaTracking = '?utm_source=newsletter&utm_medium=email&utm_campaign=2019_' + mm + '_' + dd;
const iframeHeight = 1000;
const iframeWidth = 375;
const jobCodes = [];
const logos = [];

const isMatchPattern = function (jelement, pattern) {
  return jelement.text() === pattern;
};

const generateLeaderBoard = function () {
  return $(`<table width="100%" cellpadding="0" cellspacing="0" style="color:rgb(0,0,0);width:100%;max-width:100%;white-space:nowrap;padding-bottom:8px;border-collapse:collapse;font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">` +
    `  <thead>` +
    `    <tr>` +
    `      <th style="width:40px;min-width:40px;text-align:left;border-bottom:1px solid rgb(237,240,241);font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">Hạng</th>` +
    `      <th style="text-align:center;border-bottom:1px solid rgb(237,240,241);font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">User</th>` +
    `      <th style="text-align:left;border-bottom:1px solid rgb(237,240,241);font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">Reward</th>` +
    `    </tr>` +
    `  </thead>` +
    `  <tbody>` +
    `    <tr style="font-size:1.3em">` +
    `      <td style="padding:3px;text-align: center;"><img width="15px" src="https://i.imgur.com/UK5TznH.jpg" title="#1" /></td>` +
    `      <td style="text-align:center;font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">** User 1</td>` +
    `      <td style="font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">60 Triệu</td>` +
    `    </tr>` +
    `    <tr style="font-size:1.2em">` +
    `      <td style="padding:3px;text-align: center;"><img width="15px" src="https://i.imgur.com/uQqYKZo.jpg" title="#2" /></td>` +
    `      <td style="text-align:center;font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">*** User 2</td>` +
    `      <td style="font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">50 Triệu</td>` +
    `    </tr>` +
    `    <tr style="font-size:1.1em">` +
    `      <td style="padding:3px;text-align: center;"><img width="15px" src="https://i.imgur.com/ir4CDaB.jpg" title="#3" /></td>` +
    `      <td style="text-align:center;font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">*** ** User 3</td>` +
    `      <td style="font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">30 Triệu</td>` +
    `    </tr>` +
    `    <tr>` +
    `      <td style="padding:3px;text-align: center;"><div style=""width:15px;height:15px;line-height:15px;margin:0 auto;color:rgb(255,255,255);text-align:center;background-color:rgb(189, 189, 189);border-radius:15px;">4</div></td>` +
    `      <td style="text-align:center;font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">*** User 4</td>` +
    `      <td style="font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">20 Triệu</td>` +
    `    </tr>` +
    `    <tr>` +
    `      <td style="padding:3px;text-align: center;"><div style=""width:15px;height:15px;line-height:15px;margin:0 auto;color:rgb(255,255,255);text-align:center;background-color:rgb(189, 189, 189);border-radius:15px;">5</div></td>` +
    `      <td style="text-align:center;font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">**** User 5</td>` +
    `      <td style="font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">20 Triệu</td>` +
    `    </tr>` +
    `  </tbody>` +
    `</table>`);
}

$(document).ready(function () {
  const generateNewsletter = function () {
    let iframe = $('#iframe');
    if (!iframe || !iframe.length) {
      iframe = $('<iframe id="iframe" class="flex layout-centered" style="width:50%;float:left;margin-top:20px;padding:5px;"/>');
      iframe.height(iframeHeight);
      iframe.width(iframeWidth);
      iframe.insertBefore('.wrapper .flex.layout-centered');
    }
    let newsletter = $(`<div style="font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;color:#333;line-height: 1.5;font-size:14px;"></div>`);
    let jobContainter = $(`<ol style="padding-inline-start: 30px;"></ol>`);
    let greeting = $(
      `<div style="font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">` +

      `<p style="text-align:center;">Chào bạn &lt;&lt;First Name&gt;&gt;, <br><br> Chúc ta hãy cùng chúc mừng bạn <strong>Phương</strong> đã giới thiệu thành công cho vị trí iOS Developer tại AIQ Tech với mức thưởng <span style="color: rgb(255,255,255);background-color: rgb(253,111,44);font-weight: 700;padding: 0.05em 0.5em 0.1em;white-space: nowrap;border-radius: 15px;">30,000,000 VND</span> (Vị trí này đã đóng)</p>` +

      `<p style="text-align:center;">Dưới đây là Bảng Xếp Hạng 30 Ngày gần nhất:</p>` +

      `</div>`
    );
    const leaderBoard = generateLeaderBoard();
    let logoContainer = $(`<div style="text-align:center;"></div>`);
    let footerHTML =
      `<br><strong>Có một số lưu ý sau để &lt;&lt;First Name&gt;&gt; giới thiệu hiệu quả hơn:</strong>` +
      `<ul>` +
      `<li style="margin-bottom:5px;">Nhằm rút gọn thời gian xử lý, Recruitery sẽ hỗ trợ bạn sắp xếp lịch phỏng vấn bằng cách liên hệ trực tiếp với ứng viên. Nếu bạn không đồng ý thì reply mail này để Kim biết nhé.</li>` +
      `<li style="margin-bottom:5px;">Nếu ứng viên không xác nhận giới thiệu quá 1 tuần thì hệ thống sẽ tự động reject và đóng lại case giới thiệu.</li>` +
      `<li style="margin-bottom:5px;">Nếu bạn không xóa contact ứng viên ở file CV thì Recruitery sẽ không chịu bất cứ trách nhiệm nào khi có tranh chấp.</li>` +
      `</ul>` +
      `<p>Nếu bạn có bất kì thắc mắc gì liên quan tới job hoặc process giới thiệu, bạn cứ liên hệ qua số +84-886-006-304.</p>` +
      `<p style="font-size:0.85em;color:#999;">Nếu bạn không muốn tiếp tục nhận mail này? <a style="color:#999;" href="https://yet-another-mail-merge.com/unsubscribe">Hủy theo dõi</a></p>`;

    const rows = $(queryRecord);
    rows.each(function (i) {
      const cols = rows[i].querySelectorAll('td');
      const job_Code = cols[0].innerText;
      const job_Name = cols[1].innerText;
      const job_BonusAmout = cols[2].innerText;
      const job_IsHot = cols[3].innerText === 'true';
      const job_IsNew = cols[4].innerText === 'true';
      const city_Name = cols[5].innerText;
      const company_Logo = cols[6].innerText;
      const jobItem = '<li style="margin-bottom:5px;"><span style="color: rgb(255,255,255);background-color: rgb(253,111,44);font-weight: 700;padding: 0.05em 0.5em 0.1em;white-space: nowrap;border-radius: 15px;">' + job_BonusAmout +
        ' VND</span>&nbsp;<a href="https://recruitery.co/job-view/' + job_Code +
        '.html' + gaTracking + '">' + job_Name +
        '</a> <span style="margin-left:3px;padding-left:4px;padding-right:4px;padding-top:2px;padding-bottom:2px;color: #777!important;font-size: 11px;background: #eee;border-radius: 2px;">' + city_Name +
        '</span> </li>';
      $(jobItem).appendTo(jobContainter);
      if (!jobCodes.includes(job_Code)) {
        jobCodes.push(job_Code);
      }
      if (!logos.includes(company_Logo)) {
        logos.push(company_Logo);
        $('<img alt="logo" src="https://static.recruitery.co' + company_Logo + '" height="50px;" style="margin-right:4px;">').appendTo(logoContainer);
      }
    });
    $('<a href="https://app.recruitery.co/recruiter/jobs' + gaTracking + '">XEM TOÀN BỘ DANH SÁCH →</a>').appendTo(jobContainter);

    newsletter.append(greeting);
    newsletter.append('<hr>');
    newsletter.append(leaderBoard);
    newsletter.append('<hr>');
    newsletter.append(logoContainer);
    newsletter.append('<hr>');
    newsletter.append(jobContainter);
    newsletter.append($(footerHTML));
    $('#iframe').contents().find('body').append(newsletter[0].outerHTML);
  };

  document.arrive(queryResultArrived, function () {
    console.log('====== TRIGGER MANIPULATE =====');
    let pattern = $(queryResultArrived).first();
    let rows = $(queryRecord);
    // if create calendar
    if (isMatchPattern(pattern, patternCalendar)) {
      console.log('====== ', patternCalendar, ' =====');
      rows.each(function (i) {
        const cols = rows[i].querySelectorAll('td');
        const firstTd = $(cols[0]);
        let apply_Id = cols[1].innerText;
        let candidate_Name = cols[2].innerText;
        let job_Name = cols[3].innerText;
        let company_Name = cols[4].innerText;
        let candidate_Email = cols[5].innerText;
        let apply_ApplyDate = cols[6].innerText;
        let candidate_Phone = cols[7].innerText;
        let candidate_CV = cols[8].innerText;
        let job_Id = cols[9].innerText;
        let company_Email = cols[10].innerText;
        let company_EmailCC = cols[11].innerText;
        let company_Phone = cols[12].innerText;
        let company_Address = cols[13].innerText;

        const eventTitle = company_Name + " " + job_Name + " - Interview invitation - " + candidate_Name;
        const eventContent = "Dear " + candidate_Name + "," +
          "\n\nWe are pleased to invite you to join interview with details as below:\nVenue: " + company_Address +
          "\n\nIf there is any urgency, feel free to contact Interviewer via cellphone  " + company_Phone + " and email " + company_Email + "." +
          "\n\nPlease make sure you understand the job https://recruitery.co/job-view/job-" + job_Id + ".html prior to the interview." +
          "\nIt is highly appreciated if we could receive your confirmation of attendance by replying to this meeting schedule within 12 hours." +
          "\n" +
          "\nDear employer, here is information about the candidate:" +
          "\n- Mobile: " + candidate_Phone + ".\n- Email: " + candidate_Email +
          "\n- Resume: " + candidate_CV;
        const href = "http://www.google.com/calendar/event?action=TEMPLATE&location=" + encodeURI(company_Address) + "&details=" + encodeURI(eventContent) + "&add=" + encodeURI('toan@recruitery.co') + "," + encodeURI(candidate_Email) + "," + encodeURI(company_Email) + "," + encodeURI(company_EmailCC) + "&text=" + encodeURI(eventTitle);
        const button = $('<a href="' + href + '" target="_blank" class="Button Button--primary">Create calendar</a>');
        firstTd.empty();
        button.appendTo(firstTd);

      });
    } else if (isMatchPattern(pattern, patternNewsletter)) {
      // generate btn
      const button = $('<button class="Button Button--primary">Generate</button>');
      button.appendTo(pattern);
      button.click(function () {
        generateNewsletter();
      })
    }
  });
});

console.log('====== END APP =====');