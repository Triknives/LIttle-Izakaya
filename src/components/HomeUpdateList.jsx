import React from "react";
import HomeUpdate from "./HomeUpdate";

var updatesStyling = {
  margin: '1vh auto',
  display:'flex',
  width: '60%',
  flexWrap: 'wrap',
  justifyContent:'center',
  padding: '1vh',
}

const homeUpdateList = [
 {
    date: "2/14/2020",
    update: "We made it! We are now officially having our grand opening! We look forward to sharing all we have learned from abroad and hope to bring you a great experience!",
 },
 {
   date: "2/11/2020",
   update: "We've begun hiring for staff to support demand for our delicious food! If you are looking for Part-time or Full-time work and enjoy a fast paced environment look no further! Send an e-mail to cordell.desu@gmail.com to inquire!",
 },
 {
   date: "2/8/2020",
   update: "Well, we finally signed the lease and we can happily share our location. You can find us at 1667 SE Bybee Blvd, Portland, OR 97202! We have some near by parking, but we suspect it will fill up fast!",
 },
 {
   date: "2/03/2020",
   update: "Proud to announce that we will be opening a new location in the Portland, Oregon area! Once we get the lease, we will happily share where we will be serving you!",
 }
];
function HomeUpdateList(){

  return (
    <div style = {updatesStyling}>
      {homeUpdateList.map((homeUpdate, index) =>
        <HomeUpdate date={homeUpdate.date}
        update={homeUpdate.update}
        key={index}/>
      )}
    </div>
  );
}

export default HomeUpdateList;
