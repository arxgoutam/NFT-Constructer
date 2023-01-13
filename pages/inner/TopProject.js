import React, { useEffect, useState } from "react";
function TopProject() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://admin.nftconstructer.com/api/home/projects")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  return (
    <>
      {/* =====================top project====================== */}
      <div className='projects cpy-6'>
        <div className='section-title'>
          <p className='sm-title'>best service</p>
          <h2 className='sec-title'>Top 5 Projects</h2>
          <p className='sec-des'>
            Discover more about our latest nft and blockchain development
            projects done by our expert team.
          </p>
        </div>

        <div className='project-content'>
          <a
            href='https://opensea.io/'
            target='_blank'
            rel='noreferrer'
            className='btn-purple-2'
          >
            View Ranking
          </a>

          <div
            className='table-responsive'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <table className='project-table'>
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Volume </th>
                  <th>Sales 7 days</th>
                  <th>Total Supply</th>
                  <th>Total Owners</th>
                </tr>
              </thead>

              <tbody>
                {items.map((table, index) => (
                  <tr key={index}>
                    <td>{table.name}</td>
                    <td>{table.value}</td>
                    <td>{table.days}</td>
                    <td>{table.all_time_value}</td>
                    <td>{table.sales_value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ===============top project end=============== */}
    </>
  );
}

export default TopProject;
