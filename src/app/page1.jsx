"use client"
import React, { useState } from "react";
import Head from "next/head";
import Router from 'next/router';
import Layout from "../components/Layout";

export default function Create() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        setError("");
        setMessage("");
        if (title && content) {
            // send a request to the server.
            try {
                const body = { title, content, published: false };
                await fetch(`/api/post`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                });
                await Router.push("/drafts");
            } catch (error) {
                console.error(error);
            }
        } else {
            setError("All fields are required");
            return;
        }
    }

    return (
        <Layout>
    <Head>
      <title>Posts</title>
      <meta name= "description" content=" Generated by create next app"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {
      feed.length > 0 ? (
        feed.map((item, index) => (
          <div className='post-card' key={index}>
            <span style={{ fontWeight: 'bold' }}>{item.title}</span>
            <p>{item.content}</p>
            <div>
              <button onClick={() => deletePost(item.id)}>{
                loading ? "Loading": "Delete"
              }</button>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>No published posts found.</p>
        </div>
      )
    }
    <style jsx>{`
                .post-card{
                border:1px solid #d4d4d5;
                padding:10px;
                margin:10px;
                }
                `}
    </style>
  </Layout>
)
    
}