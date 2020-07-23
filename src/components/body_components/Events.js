import React from "react";

function Events() {
  return (
    <section className="events" id="events">
      <Hosted />
      <Attended />
    </section>
  );
}

function Hosted() {
  return (
    <div className="event">
      <div className="header">
        <h1>
          <span role="img" aria-label="hostedevent">
            🎓
          </span>{" "}
          Hosted Events
        </h1>
        <p>
          Here are the seminars / events I have hosted or spearheaded click to
          open
        </p>
      </div>
      <div className="hosted_body">
        <SeminarItem
          title="Flutter Study Jam Pt. 1"
          content="Speaker at DSC Benilde's event on Flutter, where I taught students the basics of developing a mobile application with Flutter. From installation to building a basic application using different kinds of widgets."
          url="https://www.facebook.com/dsccsb/photos/a.158427545551051/195971265130012"
        />
        <SeminarItem
          title="Flutter Study Jam Pt. 2"
          content="Speaker at DSC Benilde's second event on Flutter, where I taught students how to integrate a qr code scanner to a mobile application, and how to create and read a qr code using the available flutter packages."
          url="https://www.facebook.com/dsccsb/photos/pcb.191954185531720/191953975531741/"
        />
        <SeminarItem
          title="Flutter for Starters"
          content="Guest Speaker at Flutter for starters Webinar hosted by Developer Student Clubs Philippines. Where I shared some mobile applications I've made and insights on why Flutter is a great tool for developers."
          url="https://www.facebook.com/dsc.philippines/videos/1617848895036898"
        />
      </div>
    </div>
  );
}

function Attended() {
  return (
    <div className="event">
      <div className="header">
        <h1>
          <span role="img" aria-label="attendedevent">
            🎓
          </span>{" "}
          Attended Events
        </h1>
        <p>Here are the seminars / events I have attended click to open</p>
      </div>
      <div className="hosted_body">
        <SeminarItem
          title="Samsung Workshop"
          content="Attended Samsung Workshop hosted by Association of Information Management (AIM) where we were taught by Samsung Developers how to create and design applications for Galaxy Watch using Tizen Studio."
          url=""
        />
        <SeminarItem
          title="Solution Challenge"
          content="Participated in Developer Student Clubs Solution challenge, where it was required for us to develop a application that solves local problems. (Bayanihan PH)"
          url="https://github.com/jose-bamboo/solution-challenge"
        />
      </div>
    </div>
  );
}

function SeminarItem(props) {
  let { title, content, url } = props;
  return (
    <a
      className="event_item"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="event_label">
        <h2>{title}</h2>
        <hr />
        <p>{content}</p>
      </div>
    </a>
  );
}

export default Events;
