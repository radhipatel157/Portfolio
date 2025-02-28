export default function Certifications() {
  const certifications = [
    
    {
      title: "Supervised Machine Learning: Regression and Classification",
      icon: "fas fa-robot",
      color: "text-green-500",
      link: "https://www.coursera.org/account/accomplishments/verify/EJIR02EC3658",
    },
    {
      title: "Google Crash Course on Python",
      icon: "fab fa-python",
      color: "text-yellow-500",
      link: "https://www.coursera.org/account/accomplishments/verify/946FGUXAFHHK",
    },
    {
      title: "Google IT Support Specialization",
      icon: "fab fa-google",
      color: "text-blue-500",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/9445KC83JL7X",
    },
    {
      title: "AWS Academy Cloud Foundations",
      icon: "fab fa-aws",
      color: "text-yellow-400",
      link: "https://www.credly.com/badges/d960a979-0b3d-4ce1-9a3f-2a3710aef8fb",
    },
    
    
    {
      title: "GirlScript Summer of Code 2024 Contributor",
      icon: "fas fa-users",
      color: "text-pink-400",
      link: "https://github.com/radhipatel157/Certificates/blob/main/contributorbadge.png",
    },
    {
      title: "Python Internship Certificate",
      icon: "fas fa-briefcase",
      color: "text-indigo-400",
      link: "https://github.com/radhipatel157/Certificates/blob/main/Python%20Internship.pdf",
    },
    {
      title: "Tata Imagination Challenge 2024",
      icon: "fas fa-lightbulb",
      color: "text-blue-400",
      link: "https://unstop.com/certificate-preview/d07cde0d-ae79-47da-955e-c636f3d5c0b8",
    },
    {
      title: "L'Oreal Sustainability Challenge",
      icon: "fas fa-leaf",
      color: "text-teal-400",
      link: "https://unstop.com/certificate-preview/83a42be8-6e3f-475b-819b-c4ec22821b96",
    },
    {
      title: "Flipkart Grid 6.0 - Hackathon Certificate",
      icon: "fas fa-shopping-cart",
      color: "text-yellow-500",
      link: "https://unstop.com/certificate-preview/b982515e-6eda-4fed-9943-6579ce9e53f0",
    },
    {
      title: "Myntra HackerRamp: WeForShe 2024 - Certificate of Participation",
      icon: "fas fa-user-check",
      color: "text-orange-400",
      link: "https://github.com/dshiv15/Certificates/blob/main/Myntra_HackerRamp.pdf",
    }

  ];

  return (
    <section id="certifications" className="py-20 scroll-mt-16 ">
      <div className="container mx-auto px-4 ">
        {/* <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2> */}
        <div className="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 mb-16">
        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
          My <span className="text-violet-400">Certifications</span>
        </h3>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 rounded-lg p-6 bg-gray-800 bg-opacity-40 backdrop-filter backdrop-blur-sm hover:shadow-lg hover:shadow-violet-500/20 transition duration-300 flex items-center"
            >
              <div className={`text-3xl ${cert.color} mr-4`}>
                <i className={cert.icon}></i>
              </div>
              <div>
                <h3 className="text-lg font-medium">{cert.title}</h3>
                <span className="text-violet-400 text-sm flex items-center mt-1">
                  View Certificate <i className="fas fa-external-link-alt ml-1"></i>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
