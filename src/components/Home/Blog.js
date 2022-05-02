import React from "react";

const Blog = () => {
  return (
    <div className="mt-24">
      <div className="container bg-gray-200 mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="section-content mb-16">
            <h2
              className="text-4xl text-center mb-11"
              style={{ lineHeight: "40px" }}
            >
              {" "}
              Four Different between With{" "}
            </h2>
            <p className="text-center pt-4">
              Javascript NodeJs, NodeJS MongoDB, Sql NoSql & JsonWebToken
            </p>
          </div>

          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-amber-500 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-200 text-xl">
                Javascript vs NodeJs
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-400 text-opacity-100">
                {" "}
                NodeJS : NodeJS is a cross-platform and opensource Javascript
                runtime environment that allows the javascript to be run on the
                server-side. Nodejs allows Javascript code to run outside the
                browser. Nodejs comes with a lot of modules and mostly used in
                web development.{" "}
              </p>
              <p className="text-sm leading-snug tracking-wide text-gray-400 text-opacity-100">
                {" "}
                JavaScript : Javascript is a Scripting language. It is mostly
                abbreviated as JS. It can be said that Javascript is the updated
                version of the ECMA script. Javascript is a high-level
                programming language that uses the concept of Oops but it is
                based on prototype inheritance.{" "}
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-amber-500 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-amber-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">
                {" "}
                When should you use nodejs and when should you use mongodb
              </h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                When should we use Nodejs: Any project needs a programming
                environment and a runtime library that offers we basic
                programming tools/support and can compile and/or interpret your
                code. Nodejs is such as tool for the Javascript programming
                language. There are other similar tools for other languages such
                as Python, Java, PHP, C#, C++, Go, etc... So, if we want to
                write some kind of stand-alone program or server in Javascript,
                then you can use nodejs for it.
              </p>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                When should we use MongoDB: If our application needs the ability
                to persistently store data in a way that we can efficiently
                query or update it later, then you would typically use some form
                of database. There are dozens of popular databases. MongoDB is
                one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS),
                Postgres are examples of other databases. Different databases
                have different strengths (things they are best at) and different
                ways of using them so it's a whole different question to choose
                the right/best database for what you're doing.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-amber-500 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-200 text-xl">
                Differences between sql and nosql databases
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-400 text-opacity-100">
                SQL: RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) These
                databases have fixed or static or predefined schema These
                databases are not suited for hierarchical data storage. These
                databases are best suited for complex queries Vertically
                Scalable Follows ACID property
              </p>
              <p className="text-sm leading-snug tracking-wide text-gray-400 text-opacity-100">
                NO SQL: Non-relational or distributed database system. They have
                dynamic schema These databases are best suited for hierarchical
                data storage. These databases are not so good for complex
                queries Horizontally scalable Follows CAP(consistency,
                availability, partition tolerance)
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-amber-500 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 bg-amber-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">
                How JWT Works
              </h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                er from other web tokens in that they contain a set of claims.
                Claims are used to transmit information between two parties.
                What these claims are depends on the use case at hand. For
                example, a claim may assert who issued the token, how long it is
                valid for, or what permissions the client has been granted. A
                JWT is a string made up of three parts, separated by dots (.),
                and serialized using base64. In the most common serialization
                format, compact serialization, the JWT looks something like
                this: xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON
                strings: The header and the payload. The signature. The JOSE
                (JSON Object Signing and Encryption) header contains the type of
                token — JWT in this case — and the signing algorithm.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
