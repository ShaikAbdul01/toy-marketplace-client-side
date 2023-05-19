const Blog = () => {
  return (
    <>
      <div className="mt-10 bg-gray-100 p-6 rounded shadow-lg mb-10">
        <h1 className="text-4xl font-extrabold text-center mb-10">Question</h1>
        <article className="bg-amber-300 p-5 rounded-xl shadow-2xl mb-5">
          <h1 className="text-2xl font-bold mb-2">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side??
          </h1>
          <p className="text-gray-600">
            <span className="font-bold">Ans: </span>An access token is a
            credential used to access protected resources, while a refresh token
            is used to obtain a new access token. Access tokens are typically
            stored in memory, while refresh tokens should be securely stored,
            such as in an HTTP-only cookie or secure storage options.
          </p>
        </article>
        <article className="bg-amber-300 p-5 rounded-xl shadow-2xl mb-5">
          <h1 className="text-2xl font-bold mb-2">
            2. Compare SQL and NoSQL databases?
          </h1>
          <p className="text-gray-600">
            <span className="font-bold">Ans: </span>SQL databases are relational
            and use structured query language for data management. They have
            predefined schemas, support transactions, and are suitable for
            complex queries. NoSQL databases are non-relational, have flexible
            schemas, are horizontally scalable, and are better suited for
            handling large amounts of unstructured data.
          </p>
        </article>
        <article className="bg-amber-300 p-5 rounded-xl shadow-2xl mb-5">
          <h1 className="text-2xl font-bold mb-2">
            3. What is express js? What is Nest JS?
          </h1>
          <p className="text-gray-600">
            <span className="font-bold">Ans: </span>Express.js is a fast and
            minimalist web application framework for Node.js. It provides a
            robust set of features for building web applications and APIs,
            including routing, middleware support, and template rendering.{" "}
            <br /> <br />
            Nest.js, on the other hand, is a powerful and extensible Node.js
            framework built with TypeScript. It follows a modular architecture
            and uses decorators, dependency injection, and other design patterns
            to create scalable and maintainable server-side applications.
            Nest.js is often used in enterprise and large-scale projects.
          </p>
        </article>
        <article className="bg-amber-300 p-5 rounded-xl shadow-2xl mb-5">
          <h1 className="text-2xl font-bold mb-2">
            4. What is MongoDB aggregate and how does it work?
          </h1>
          <p className="text-gray-600">
            <span className="font-bold">Ans: </span>
            MongoDB Aggregation is a powerful feature that allows you to process
            and analyze data within MongoDB. It works by using a pipeline of
            stages, where each stage applies a specific operation on the data.
            Stages can include filtering, grouping, sorting, projecting, and
            performing mathematical and statistical calculations, among others,
            to derive meaningful insights from the data.
          </p>
        </article>
      </div>
    </>
  );
};

export default Blog;
