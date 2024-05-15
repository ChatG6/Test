"use client";
import "@/app/main.css";
import Form from "@/components/Form";
import Table from "@/components/Table";
import NotifyBox from "@/components/notifBox";
import { useState } from "react";

export default function DB() {
  const [notif, setNotif] = useState(false);
  const [entry, setEntryFormState] = useState(true)
  const [table, setTableState] = useState(false)
  const [msg,setMsg] = useState("")
  function openTab(evt:any, tabId:number) {
    const tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
    switch(tabId){
      case 0:
        setEntryFormState(true);
        setTableState(false);
        break;
      case 1:
        setTableState(true);
        setEntryFormState(false);
          break;
    }
  }
  function sendNotif(msg:string){
    setNotif(true)
    setMsg(msg)
  }
  return (
    <section className="db-root-container">
      <section className="nav-menu">
        <h3>Database Management</h3>
      <button className="tab active" onClick={(e)=>openTab(e,0)}>New Entry</button>
      <button className="tab" onClick={(e)=>openTab(e,1)}>All entries</button>
      </section>
      <section className="db-main">
        {entry && <Form notify={sendNotif} />}
        {/*table && <Table data={[{username:'ward',password:'password'}]}/>*/}
      </section>
      <section className="db-notif">
        {notif && <NotifyBox message={msg} setDisplay={setNotif} />}
      </section>
    </section>
  );
}
