import { useState } from 'react'
import { Link } from 'react-scroll';

function App() {
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"/>

    <header className='flex flex-col justify-center items-center text-center mt-12'>
      <ul className='flex gap-5 text-white bg-blue-800/50 px-3 py-1 rounded-full shadow-2xl shadow-blue-500/20 text-s sm:text-base'>
        <li>
          <Link to="formacion" smooth={true} duration={500} className="hover:text-gray-400 transition-colors duration-300 cursor-pointer">
            Formación
          </Link>
        </li>
        <li><a href="#">Experiencias</a></li>
        <li><a href="#">Referencias</a></li>
        <li><a href="#">Conocimientos</a></li>
        <li><a href="#">Proyectos</a></li>
      </ul>
    </header>

    <section className='my-20'>
      <div className='flex flex-col justify-center items-center text-center'> 
        <div className="w-40 h-40 rounded-full overflow-hidden mb-4 shadow-2xl shadow-blue-500/20">
          <img src="../yo.webp" alt="Foto José" className="w-full h-full object-cover" />
        </div>
        <h1 className='text-white font-bold text-4xl'>José A. Escalona G.</h1>

        <ul className='flex flex-row gap-5 mt-5'>
          <li>
            <a href="https://www.facebook.com/escalonajag?mibextid=ZbWKwL" className='hover:text-gray-300'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512" role="img" className="w-6 h-6">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/escalonajag" className="flex items-center hover:text-gray-300">
              <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
          </li>
          <li>
              <a href="https://wa.me/584120104910" className='hover:text-gray-300'>
                <svg fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 308 308" xml:space="preserve" stroke="#ffffff"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <g >
                  <path d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path> <path d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path></g></g>
                </svg>
              </a>
          </li>
          <li>
            <a href="mailto:jose.al.es301@gmail.com" className="flex items-center text-white hover:text-gray-300">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" >
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/JoseEscalona18" className="flex items-center text-white hover:text-gray-300">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </li>
        </ul>
        <span className='text-white mt-4 font-bold'> 23 años </span>
      </div>

      <p> </p>
    </section>
    
    <section>

    <h1 id='formacion' className='text-center font-bold text-4xl text-white mb-1 sm:mb-10'> Formación </h1>
    <div class="grid grid-cols-3 grid-rows-5 text-white max-w-[1200px] p-6 mx-auto rounded-md border-4 border-blue-900/20 shadow-[0_20px_50px_rgba(8,_112,_184,_0.05)] scale-90 text-s sm:text-base">
      <div class="col-span-1 row-span-1 flex items-center justify-end font-bold py-2 sm:py-0">2007 - 2013</div>
      <div class="col-span-1 row-span-5 flex items-center justify-center sm:py-10"><img src="../linea.webp" alt="Linea" className='max-h-[400px] sm:max-h-96'/></div>
      <div class="col-span-1 row-span-1 flex items-center justify-left py-2 sm:py-0"> 
        <div>
          <h4 className='font-bold'>U.E Hna “María Sorrosal”</h4>
          <p>Educación Primaria.</p>
        </div>
      </div>
      <div class="col-span-1 row-span-1 flex items-center justify-end font-bold py-2 sm:py-0">2013 - 2015</div>
      <div class="col-span-1 row-span-1 flex items-center justify-left py-2 sm:py-0">
        <div>
          <h4 className='font-bold'>Escuela Técnica Comercial “Madre Rafols”</h4>
          <p>Educación básica (1ero, 2do y 3er año).</p>
        </div>
      </div>
      <div class="col-span-1 row-span-1 flex items-center justify-end font-bold py-2 sm:py-0">2015 - 2019</div>
      <div class="col-span-1 row-span-1 flex items-center justify-left py-2 sm:py-0">
        <div>
          <h4 className='font-bold'>Escuela Técnica Comercial “Madre Rafols”</h4>
          <p>Egresado como Técnico Medio en comercio y servicios administrativos mención Informática.</p>
        </div>
      </div>
      <div class="col-span-1 row-span-1 flex items-center justify-end font-bold py-2 sm:py-0">2020</div>
      <div class="col-span-1 row-span-1 flex items-center justify-left py-2 sm:py-0">
        <div>
          <h4 className='font-bold'>Instituto Universitario de Tecnología Industrial Rodolfo Loreo Arismendi (IUTIRLA)</h4>
          <p>Cursado el primer semestre de Diseño gráfico.</p>
        </div>
      </div>
      <div class="col-span-1 row-span-1 flex items-center justify-end font-bold py-2 sm:py-0">2021 - ACTUALIDAD</div>
      <div class="col-span-1 row-span-1 flex items-center justify-left py-2 sm:py-0">
        <div>
          <h4 className='font-bold'>Universidad Valle del Momboy</h4>
          <p>Cursando actualmente el 8to semestre en ingeniería en computación.</p>
        </div>
      </div>
    </div>

    </section>
    </>
  )
}

export default App