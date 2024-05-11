import React from 'react'

function ListJobsComponent() {

    const dumyData = [
        {
            "id": "1",
            "jobPosition": "Senior Java Developer",
            "jobDescription": "Java Full Stack Developer",
            "datePosted": "2024-02-22",
            "dateApplied": "2024-02-24",
            "keywords": ["Go", "Full Stack", "React", "Front End", "Java"],
            "response": "Pending"
        },

        {
            "id": "2",
            "jobPosition": "Python Developer",
            "jobDescription": "Java Full Stack Developer",
            "datePosted": "2024-02-22",
            "dateApplied": "2024-02-24",
            "keywords": ["Go", "Full Stack", "React", "Front End", "Java"],
            "response": "Pending"
        },

        {
            "id": "3",
            "jobPosition": "Go Lang Developer",
            "jobDescription": "Java Full Stack Developer",
            "datePosted": "2024-02-22",
            "dateApplied": "2024-02-24",
            "keywords": ["Go", "Full Stack", "React", "Front End", "Java"],
            "response": "Pending"
        },

        {
            "id": "4",
            "jobPosition": "C# Developer",
            "jobDescription": "Java Full Stack Developer",
            "datePosted": "2024-02-22",
            "dateApplied": "2024-02-24",
            "keywords": ["Go", "Full Stack", "React", "Front End", "Java"],
            "response": "Pending"
        }
    ]

    return (
        <div>
            <h2 className='text-center'>List of Jobs</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>

                    </tr>
                    <th>Job id</th>
                    <th>Job Position</th>
                    <th>Job Description</th>
                    <th>Date Posted</th>
                    <th>Date Applied</th>
                    <th>Keywords</th>
                    <th>Response</th>

                </thead>
                <tbody>
                    {
                        dumyData.map(job =>
                            <tr key={job.id}>
                                <td>{job.id}</td>
                                <td>{job.jobPosition}</td>
                                <td>{job.jobDescription}</td>
                                <td>{job.datePosted}</td>
                                <td>{job.dateApplied}</td>
                                <td>{job.keywords}</td>
                                <td>{job.response}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListJobsComponent
