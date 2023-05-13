const Footer = () => {
  return (
    <footer className="px-10 py-10 bg-wh-900 text-wh-50">
      <div className="justify-between gap-16 mx-auto sm:flex">
        {/* First Column */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Voluptate exercitation magna minim et sit dolore occaecat anim
            exercitation sit amet. Incididunt culpa qui ad excepteur adipisicing
            aliqua. Aute officia nisi incididunt enim laborum laborum pariatur
            pariatur nulla adipisicing. Exercitation culpa ad proident esse
            reprehenderit sit qui fugiat. Sint adipisicing adipisicing anim eu
            ipsum sit Lorem. Do dolor eu reprehenderit duis ipsum.
          </p>
          <p>©️ Blog of the Future All Rights Reserved.</p>
        </div>
        {/* Second Column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Officia cupidatat Lorem ipsum</p>
          <p className="my-5">Reprehenderit commodo fugiat</p>
          <p>Officia velit sit</p>
        </div>
        {/* Third Column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Incididunt culpa deserunt culpa eu consequat Lorem Lorem cillum
            occaecat in quis commodo exercitation ad.
          </p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
