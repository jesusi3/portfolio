import './ProjectPage.css';
export default function ProjectPage({setPage, page}) {

    return (
        <>
            <h1 className='Test-1' onClick={() => setPage(!page)}>Project Page</h1>
        </>
    );
}