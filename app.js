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
  var eleText = jelement.text().toLowerCase();
  return eleText === pattern.toLowerCase();
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

  document.arrive(queryResultArrived, function () {
    console.log('====== TRIGGER MANIPULATE =====');
    let pattern = $(queryResultArrived).first();
    let rows = $(queryRecord);
    // if create calendar
    let isPatternCalendar = isMatchPattern(pattern, patternCalendar)
    if (isPatternCalendar) {
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
        const href = "http://www.google.com/calendar/event?action=TEMPLATE&location=" +
          encodeURI(company_Address) +
          "&details=" +
          encodeURI(eventContent) +
          "&add=" +
          encodeURI('account@recruitery.co') +
          "," +
          encodeURI(candidate_Email) +
          "," +
          encodeURI(company_Email) +
          "," +
          encodeURI(company_EmailCC) +
          "&text=" +
          encodeURI(eventTitle);
        const button = $('<a href="' + href + '" target="_blank" class="Button Button--primary">Create calendar</a>');
        firstTd.empty();
        button.appendTo(firstTd);

      });
    }
  });
});

console.log('====== END APP =====');