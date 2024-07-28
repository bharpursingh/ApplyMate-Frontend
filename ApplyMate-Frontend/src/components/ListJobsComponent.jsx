import { useEffect, useState } from "react";
import { listJobs } from "../services/JobService";
import moment from 'moment';

const ListJobsComponent = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        listJobs().then((response) => {
            setJobs(response.data);
        }).catch(error => {
            console.log(error)
        })
    }, []);

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
        },

        {
            "id": "5",
            "jobPosition": "Java Developer",
            "jobDescription": "Java Full Stack Developer",
            "datePosted": "2024-02-22",
            "dateApplied": "2024-02-24",
            "keywords": ["Go", "Full Stack", "React", "Front End", "Java"],
            "response": "Interview"
        },
        {
            "id": "6",
            "jobPosition": "Go Developer",
            "jobDescription": "Java Full Stack Developer",
            "datePosted": "2024-02-22",
            "dateApplied": "2024-02-24",
            "keywords": ["Go", "Full Stack", "React", "Front End", "Java"],
            "response": "Accepted"
        },
        {
            "id": "7",
            "jobPosition": "VBA Developer",
            "jobDescription": "Java Full Stack Developer",
            "datePosted": "2024-02-22",
            "dateApplied": "2024-02-24",
            "keywords": ["Go", "Full Stack", "React", "Front End", "Java"],
            "response": "Rejected"
        }
    ]



    return (
        <div className="p-5 h-screen bg-gray-100">
            <h1 className="text-2xl mb-2 text-center">Job List</h1>

            <div className="p-5 h-screen overflow-auto rounded-lg shadow hidden md:block">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b-2 border-gray-200 whitespace-nowrap">
                        <tr>
                            <th className="w-6 p-1 text-sm font-semibold tracking-wide text-lef">Job id</th>
                            <th className="w-25 p-3 text-sm font-semibold tracking-wide text-left">Job Position</th>
                            <th className="w-30 p-3 text-sm font-semibold tracking-wide text-left">Job Description</th>
                            <th className="w-15 p-3 text-sm font-semibold tracking-wide text-left">Date Posted</th>
                            <th className="w-15 p-3 text-sm font-semibold tracking-wide text-left">Date Applied</th>
                            <th className="w-34 p-3 text-sm font-semibold tracking-wide text-left">Keywords</th>
                            <th className="w-10 p-3 text-sm font-semibold tracking-wide text-left">Response</th>
                        </tr>


                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100 whitespace-nowrap">
                        {
                            jobs.map(job =>
                                <tr key={job.id} className={job.id % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
                                    <td className='p-3 text-sm text-gray-700'>{job.id}</td>
                                    <td className='p-3 text-sm text-gray-700'>{job.jobPosition}</td>
                                    <td className='p-3 text-sm text-gray-700'>{job.jobDescription}</td>
                                    <td className='p-3 text-sm text-gray-700'>{moment(job.datePosted).format('DD-MM-YYYY')}</td>
                                    <td className='p-3 text-sm text-gray-700'>{moment(job.dateApplied).format('DD-MM-YYYY')}</td>
                                    <td className='p-3 text-sm text-gray-700'>{job.keywords}</td>
                                    <td className='p-3 text-sm text-gray-700'>
                                        <span className={(() => {
                                            switch (job.response.toLocaleLowerCase()) {
                                                case 'pending':
                                                    return 'p-1.5 text-xs font-medium uppercase tracking tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-90'
                                                case 'interview':
                                                    return 'p-1.5 text-xs font-medium uppercase tracking tracking-wider text-yellow-800 bg-purple-200 rounded-lg bg-opacity-90'
                                                case 'accepted':
                                                    return 'p-1.5 text-xs font-medium uppercase tracking tracking-wider text-yellow-800 bg-green-200 rounded-lg bg-opacity-90'
                                                case 'rejected':
                                                    return 'p-1.5 text-xs font-medium uppercase tracking tracking-wider text-yellow-800 bg-red-200 rounded-lg bg-opacity-90'
                                            }
                                        })()
                                        }
                                        >{job.response}</span>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div >

            <div className='grid grid-cols-1 gap-4 md:hidden'>
                {dumyData.map(job => (
                    <div key={job.id} className="bg-white p-4 space-y-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <div className="font-bold">Job Id:</div>
                                <div>{job.id}</div>
                            </div>
                            <div>
                                <div className="font-bold">Position:</div>
                                <div>{job.jobPosition}</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <div className="font-bold">Description:</div>
                                <div>{job.jobDescription}</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <div className="font-bold text-gray-500">Posted:</div>
                                <div>{job.datePosted}</div>
                            </div>
                            <div>
                                <div className="font-bold text-gray-500">Applied:</div>
                                <div>{job.dateApplied}</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <div className="font-bold">Keywords:</div>
                                <div>{job.keywords}</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <div className="font-bold">Response:</div>
                                <span className={(() => {
                                    switch (job.response.toLowerCase()) {
                                        case 'pending':
                                            return 'p-1.5 text-xs font-medium uppercase tracking tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-90';
                                        case 'interview':
                                            return 'p-1.5 text-xs font-medium uppercase tracking tracking-wider text-yellow-800 bg-purple-200 rounded-lg bg-opacity-90';
                                        case 'accepted':
                                            return 'p-1.5 text-xs font-medium uppercase tracking tracking-wider text-yellow-800 bg-green-200 rounded-lg bg-opacity-90';
                                        case 'rejected':
                                            return 'p-1.5 text-xs font-medium uppercase tracking tracking-wider text-yellow-800 bg-red-200 rounded-lg bg-opacity-90';
                                        default:
                                            return '';
                                    }
                                })()}>{job.response}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div >

    );
};

export default ListJobsComponent