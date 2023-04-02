export default async function handler(request, res) {

  const badges = [
    {
        "badgeTopTitle": "Technology & Information",
        "badgePic": "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png",
        "badgeTitleName": "APA Style Citations: Introduction",
        "badgeCreatorName": "Ethan Chen"
    },
    {
        "badgeTopTitle": "Education",
        "badgePic": "https://badgesapp.psu.edu/uploads/badge/image/692/icon125-color15.png",
        "badgeTitleName": "IST Career Resources",
        "badgeCreatorName": "Bryce Schneider"
    },
    {
        "badgeTopTitle": "Professional Skills",
        "badgePic": "https://badgesapp.psu.edu/uploads/badge/image/687/icon108-color16.png",
        "badgeTitleName": "How to Self-Check For Colon Cancer",
        "badgeCreatorName": "Micheal Gardner"
    },
    {
        "badgeTopTitle": "Your Mom",
        "badgePic": "https://media.licdn.com/dms/image/C5603AQGzgroDW50Cdg/profile-displayphoto-shrink_800_800/0/1663356795733?e=2147483647&v=beta&t=BDlHskEDUe6mtCFu3yBMFRPZFdKfEeHtVUA0a5N_cg0",
        "badgeTitleName": "Rizz 101",
        "badgeCreatorName": "Spenser McLaughlin"
    }
];
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  res.json(badges);
}