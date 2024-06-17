import Image from 'next/image'
import Testimonial01 from '@/public/images/testimonial-01.jpg'
import Testimonial02 from '@/public/images/testimonial-02.jpg'
import Testimonial03 from '@/public/images/testimonial-03.jpg'

export default function RelatedStories() {  
  return (
    <aside className="bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="h3 font-bricolage text-slate-100">Related stories you might like:</h2>
          </div>
          {/* Stories container */}
          <div className="max-w-sm mx-auto sm:max-w-none grid gap-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 sm:gap-y-8 items-start">
            {/* 1st Story */}
            <article className="h-full flex flex-col bg-white p-6 shadow-xl" data-aos="fade-up">
              <header>
                <div className="flex items-center mb-4">
                  <div className="relative mr-5">
                    <Image className="rounded-full shrink-0" src={Testimonial01} width={48} height={48} alt="Testimonial 01" />
                    <div className="absolute top-0 right-0 -mr-2" aria-hidden="true">
                      <svg className="fill-blue-600" width="20" height="16" viewBox="0 0 20 16">
                        <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                      </svg>
                    </div>
                  </div>
                  {/* Acme Inc. logo */}
                  <svg className="shrink-0" width="82" height="18">
                    <path d="M1.851 17.912c.044-.618.142-1.28.294-1.986.153-.705.352-1.411.6-2.117.217-.662.478-1.32.783-1.974.305-.655.632-1.313.98-1.975.45.015.911.033 1.383.055.472.023.915.04 1.329.056.414.014.787.033 1.121.055.334.022.603.04.806.055-.16 1-.272 1.97-.337 2.912a40.131 40.131 0 0 0-.098 2.78v.584c0 .183.007.37.021.562.044.088.156.191.338.309.181.118.4.224.653.32.254.095.516.176.784.242.269.067.505.1.708.1h.174a.191.191 0 0 0 .088-.022c-.03-.368-.044-.72-.044-1.06v-.992a37.49 37.49 0 0 1 .261-4.522c.305-2.368.69-4.4 1.155-6.1.464-1.698.936-2.973 1.415-3.826-.029-.103-.17-.232-.424-.386a8.024 8.024 0 0 0-.872-.453 8.228 8.228 0 0 0-1.001-.375C11.626.051 11.354 0 11.15 0c0 .03-.004.08-.011.154a6.536 6.536 0 0 1-.033.265c-.595.324-1.22.761-1.873 1.313a19.894 19.894 0 0 0-1.96 1.919 33.836 33.836 0 0 0-1.949 2.393A31.197 31.197 0 0 0 3.506 8.78c-.667.118-1.205.258-1.611.42-.407.161-.654.352-.74.573.188 0 .431.004.729.011.298.007.635.018 1.013.033-.45.809-.853 1.566-1.21 2.272a39.58 39.58 0 0 0-.914 1.93C.52 14.6.327 15.103.196 15.53c-.13.427-.196.758-.196.993 0 .309.134.566.403.772.269.206.751.412 1.448.618Zm3.42-9.353c.45-.735.918-1.43 1.404-2.085.487-.654.966-1.242 1.438-1.764s.929-.96 1.372-1.313c.443-.353.846-.596 1.209-.728-.073.397-.15.776-.23 1.136-.079.36-.148.644-.206.85-.16.632-.309 1.253-.447 1.863a51.69 51.69 0 0 0-.38 1.842c-1.554.03-2.94.096-4.16.199Zm11.97 8.316c.247-.044.534-.15.86-.32a9.454 9.454 0 0 0 2.015-1.423c.32-.294.602-.595.85-.904a.555.555 0 0 0-.066-.243.548.548 0 0 0-.153-.198 14.303 14.303 0 0 1-2.069 1.29c-.333.17-.646.305-.936.408-.29.103-.544.17-.762.199-.523-.235-.784-.949-.784-2.14a7.548 7.548 0 0 1 1.916-5.051 6.183 6.183 0 0 1 1.263-1.103c.436-.28.799-.42 1.09-.42.333 0 .5.214.5.64 0 .736-.486 1.552-1.459 2.449.116.176.265.32.447.43.181.11.359.165.533.165.203 0 .407-.077.61-.231.203-.155.381-.357.534-.607a3.602 3.602 0 0 0 .511-1.83c0-.707-.203-1.25-.61-1.633-.406-.382-.987-.574-1.742-.574-.77 0-1.513.188-2.232.563A6.931 6.931 0 0 0 15.64 7.82a7.486 7.486 0 0 0-1.35 2.095 6.067 6.067 0 0 0-.512 2.438c0 .573.09 1.125.272 1.654.182.53.429 1 .74 1.412.313.412.68.746 1.1 1.004.422.257.872.408 1.351.452Zm17.938.022c.378 0 .719-.077 1.024-.232.305-.154.602-.349.893-.584 0-.074-.008-.155-.022-.243a.327.327 0 0 0-.153-.22c-.072 0-.185.033-.337.099-.153.066-.316.1-.49.1a.476.476 0 0 1-.37-.144c-.088-.096-.131-.298-.131-.607 0-.53.12-1.125.36-1.787.239-.661.511-1.334.816-2.018.305-.684.606-1.335.904-1.952.297-.618.512-1.147.642-1.588a1.23 1.23 0 0 0-.533-.673 1.546 1.546 0 0 0-.817-.232c-.421 0-.868.155-1.34.463-.471.31-.983.75-1.535 1.324a26.323 26.323 0 0 0-1.764 2.062 92.457 92.457 0 0 0-2.004 2.68c.044-.308.196-.724.458-1.246.261-.522.544-1.062.85-1.621.304-.559.59-1.092.86-1.6.268-.507.439-.907.511-1.202-.014-.044-.08-.106-.196-.187a3.683 3.683 0 0 0-.435-.254 3.25 3.25 0 0 0-.567-.22 2.046 2.046 0 0 0-.566-.089c-.465 0-.987.236-1.568.706-.58.47-1.165 1.044-1.753 1.72a32.77 32.77 0 0 0-1.72 2.163 95.546 95.546 0 0 0-1.45 2.03 6.325 6.325 0 0 1 .545-1.788c.276-.588.581-1.161.915-1.72.334-.56.653-1.092.958-1.6.305-.507.53-.988.676-1.444-.363-.368-.708-.647-1.035-.839a3.726 3.726 0 0 0-1.1-.419 71.842 71.842 0 0 0-1.535 2.912 21.24 21.24 0 0 0-1.296 3.199 13.377 13.377 0 0 0-.403 1.632c-.094.53-.149.97-.163 1.323.072.398.181.758.326 1.081.146.324.407.625.784.905.16-.103.418-.441.774-1.015.355-.573.802-1.243 1.339-2.007a47.74 47.74 0 0 1 1.307-1.754c.464-.596.914-1.132 1.35-1.61a10.87 10.87 0 0 1 1.22-1.17c.377-.3.675-.459.893-.474-.45.647-.832 1.261-1.144 1.842a16.12 16.12 0 0 0-.784 1.666c-.21.53-.381 1.04-.512 1.533-.13.492-.232.967-.305 1.423.102.382.269.702.501.96.233.256.508.451.828.584.232-.28.515-.655.85-1.125.333-.47.693-.975 1.077-1.511a71.34 71.34 0 0 1 1.198-1.622c.414-.544.813-1.04 1.198-1.489.385-.448.744-.816 1.078-1.103.334-.286.617-.437.85-.452-.146.31-.32.658-.523 1.048s-.396.809-.577 1.257c-.182.449-.338.92-.469 1.412-.13.493-.196.99-.196 1.49 0 .308.03.595.088.86.058.264.16.5.304.705.146.206.33.368.556.486.225.117.512.176.86.176Zm6.744.199c.697-.162 1.433-.534 2.21-1.114.777-.581 1.492-1.313 2.145-2.195a4.468 4.468 0 0 0-.37-.375c-.232.25-.497.525-.795.827-.297.301-.617.58-.958.838-.341.258-.7.474-1.078.65a2.7 2.7 0 0 1-1.154.266.75.75 0 0 1-.501-.166 1.097 1.097 0 0 1-.305-.43 2.372 2.372 0 0 1-.153-.573 4.266 4.266 0 0 1-.032-.894c.007-.095.01-.187.01-.276.93-.367 1.743-.75 2.44-1.147a8.128 8.128 0 0 0 1.775-1.334 5.13 5.13 0 0 0 1.121-1.72c.262-.655.422-1.438.48-2.35-.581-.75-1.206-1.17-1.873-1.257-.48 0-.962.11-1.449.33-.486.221-.958.523-1.415.905a8.67 8.67 0 0 0-1.285 1.345 10.45 10.45 0 0 0-1.046 1.644 9.115 9.115 0 0 0-.697 1.809 7.117 7.117 0 0 0-.25 1.842c0 .882.28 1.636.838 2.26.56.626 1.34.997 2.342 1.115Zm-.806-4.28a8.966 8.966 0 0 1 .719-1.897 8.417 8.417 0 0 1 1.012-1.544c.37-.441.766-.794 1.187-1.059.421-.265.828-.426 1.22-.485-.058 1.015-.472 1.952-1.242 2.812-.77.86-1.735 1.585-2.896 2.173ZM55.344 18c-.043-.059-.065-.213-.065-.463 0-.544.07-1.258.207-2.14.138-.882.33-1.838.577-2.868.247-1.029.537-2.091.871-3.187a43.251 43.251 0 0 1 1.078-3.121 24.34 24.34 0 0 1 1.198-2.636c.414-.772.831-1.35 1.253-1.732-.059-.132-.19-.276-.392-.43a5.09 5.09 0 0 0-.676-.43 7.166 7.166 0 0 0-.73-.342 2.286 2.286 0 0 0-.576-.166c-.276.294-.588.78-.937 1.456a28.716 28.716 0 0 0-1.067 2.36 55.028 55.028 0 0 0-1.067 2.88 51.904 51.904 0 0 0-.926 3c-.268.977-.486 1.889-.653 2.734-.167.846-.25 1.534-.25 2.063 0 .132.014.301.043.507.029.206.069.408.12.607.05.198.112.379.185.54.072.162.16.265.261.31a.63.63 0 0 1 .294.253c.066.11.138.22.218.33.08.111.192.214.338.31.145.095.377.15.696.165Zm3.87-.662c.173-.103.38-.312.62-.628.24-.317.519-.703.838-1.159a34.21 34.21 0 0 1 1.666-2.161 26.643 26.643 0 0 1 1.84-1.964c.422-.426.814-.742 1.177-.948.363-.206.559-.309.588-.309a50.21 50.21 0 0 0-.61 1.511c-.16.42-.283.78-.37 1.081a5.45 5.45 0 0 0-.174.783 4.607 4.607 0 0 0 .044 1.511c.057.287.163.533.315.74.152.205.363.37.632.495.268.125.613.188 1.034.188.13 0 .28-.03.447-.088.167-.06.337-.133.511-.22.175-.09.342-.185.501-.288.16-.103.298-.206.414-.308a.728.728 0 0 0-.054-.254c-.037-.096-.084-.158-.142-.188-.102 0-.24.037-.414.11-.174.074-.34.11-.5.11-.175 0-.31-.05-.404-.153-.094-.103-.141-.339-.141-.706 0-.456.08-.964.24-1.522.16-.56.359-1.107.598-1.644.24-.537.487-1.037.74-1.5.255-.463.484-.827.687-1.092.203-.235.36-.378.468-.43.109-.051.163-.092.163-.121a3.353 3.353 0 0 0-.598-.805 1.278 1.278 0 0 0-.948-.386c-.348 0-.733.121-1.154.364a8.866 8.866 0 0 0-1.252.882c-.414.346-.81.713-1.187 1.103-.378.39-.705.732-.98 1.026-.131.132-.313.334-.545.606-.232.272-.483.574-.751.905-.269.33-.545.661-.828.992-.283.331-.54.622-.773.872.044-.339.2-.769.468-1.29.269-.523.57-1.074.904-1.655.334-.581.668-1.15 1.002-1.71.334-.559.58-1.037.74-1.434a4.088 4.088 0 0 0-.74-1.334c-.334-.405-.69-.666-1.067-.783-.116.059-.403.456-.86 1.19-.458.736-.962 1.75-1.514 3.045a28.09 28.09 0 0 0-.675 1.72 20.967 20.967 0 0 0-.839 3.067c-.08.426-.12.78-.12 1.059.073.338.182.665.327.981.145.316.37.563.675.74Zm14.583-.463c.247-.044.534-.15.86-.32a9.454 9.454 0 0 0 2.015-1.423c.32-.294.603-.595.85-.904a.555.555 0 0 0-.066-.243.548.548 0 0 0-.152-.198 14.303 14.303 0 0 1-2.07 1.29c-.333.17-.645.305-.936.408-.29.103-.544.17-.762.199-.523-.235-.784-.949-.784-2.14a7.548 7.548 0 0 1 1.916-5.051 6.183 6.183 0 0 1 1.264-1.103c.435-.28.798-.42 1.089-.42.333 0 .5.214.5.64 0 .736-.486 1.552-1.459 2.449.116.176.265.32.447.43.181.11.36.165.533.165.204 0 .407-.077.61-.231.203-.155.381-.357.534-.607a3.602 3.602 0 0 0 .512-1.83c0-.707-.204-1.25-.61-1.633-.407-.382-.988-.574-1.743-.574-.77 0-1.513.188-2.232.563a6.931 6.931 0 0 0-1.917 1.478 7.486 7.486 0 0 0-1.35 2.095 6.067 6.067 0 0 0-.512 2.438c0 .573.091 1.125.273 1.654.181.53.428 1 .74 1.412.312.412.679.746 1.1 1.004.421.257.871.408 1.35.452Zm5.916.199c.13 0 .298-.056.501-.166a3.55 3.55 0 0 0 .643-.463c.225-.199.439-.43.642-.695a4.12 4.12 0 0 0 .501-.838 2.479 2.479 0 0 0-.577-.607 5.877 5.877 0 0 0-.806-.53 4.983 4.983 0 0 0-.828-.363 2.226 2.226 0 0 0-.664-.133c-.029.133-.08.328-.152.585-.073.257-.145.53-.218.816-.073.287-.134.57-.185.85-.051.279-.076.507-.076.683.072.206.236.394.49.563.254.169.497.268.73.298Z" fill="#334155" fillRule="nonzero" />
                  </svg>
                </div>
              </header>
              <div className="grow mb-3">
                <p className="text-slate-500 italic">Tidy has been the system to drive change in collaboration on content for our organisation.</p>
              </div>
              <footer className="text-sm font-medium">
                <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Patrick Hills</a>
                <span className="text-slate-300"> · </span>
                <span className="text-slate-500">CEO, Acme Inc.</span>
              </footer>
              <div className="text-right">
                <a className="inline-flex font-semibold text-blue-600 hover:underline mt-5 group" href="#0">Read Story <span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
              </div>
            </article>
            {/* 2nd Story */}
            <article className="h-full flex flex-col bg-white p-6 shadow-xl" data-aos="fade-up" data-aos-delay={100}>
              <header>
                <div className="flex items-center mb-4">
                  <div className="relative mr-5">
                    <Image className="rounded-full shrink-0" src={Testimonial02} width={48} height={48} alt="Testimonial 02" />
                    <div className="absolute top-0 right-0 -mr-2" aria-hidden="true">
                      <svg className="fill-blue-600" width="20" height="16" viewBox="0 0 20 16">
                        <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                      </svg>
                    </div>
                  </div>
                  {/* Acme Inc. logo */}
                  <svg className="shrink-0" width="82" height="18">
                    <path d="M1.851 17.912c.044-.618.142-1.28.294-1.986.153-.705.352-1.411.6-2.117.217-.662.478-1.32.783-1.974.305-.655.632-1.313.98-1.975.45.015.911.033 1.383.055.472.023.915.04 1.329.056.414.014.787.033 1.121.055.334.022.603.04.806.055-.16 1-.272 1.97-.337 2.912a40.131 40.131 0 0 0-.098 2.78v.584c0 .183.007.37.021.562.044.088.156.191.338.309.181.118.4.224.653.32.254.095.516.176.784.242.269.067.505.1.708.1h.174a.191.191 0 0 0 .088-.022c-.03-.368-.044-.72-.044-1.06v-.992a37.49 37.49 0 0 1 .261-4.522c.305-2.368.69-4.4 1.155-6.1.464-1.698.936-2.973 1.415-3.826-.029-.103-.17-.232-.424-.386a8.024 8.024 0 0 0-.872-.453 8.228 8.228 0 0 0-1.001-.375C11.626.051 11.354 0 11.15 0c0 .03-.004.08-.011.154a6.536 6.536 0 0 1-.033.265c-.595.324-1.22.761-1.873 1.313a19.894 19.894 0 0 0-1.96 1.919 33.836 33.836 0 0 0-1.949 2.393A31.197 31.197 0 0 0 3.506 8.78c-.667.118-1.205.258-1.611.42-.407.161-.654.352-.74.573.188 0 .431.004.729.011.298.007.635.018 1.013.033-.45.809-.853 1.566-1.21 2.272a39.58 39.58 0 0 0-.914 1.93C.52 14.6.327 15.103.196 15.53c-.13.427-.196.758-.196.993 0 .309.134.566.403.772.269.206.751.412 1.448.618Zm3.42-9.353c.45-.735.918-1.43 1.404-2.085.487-.654.966-1.242 1.438-1.764s.929-.96 1.372-1.313c.443-.353.846-.596 1.209-.728-.073.397-.15.776-.23 1.136-.079.36-.148.644-.206.85-.16.632-.309 1.253-.447 1.863a51.69 51.69 0 0 0-.38 1.842c-1.554.03-2.94.096-4.16.199Zm11.97 8.316c.247-.044.534-.15.86-.32a9.454 9.454 0 0 0 2.015-1.423c.32-.294.602-.595.85-.904a.555.555 0 0 0-.066-.243.548.548 0 0 0-.153-.198 14.303 14.303 0 0 1-2.069 1.29c-.333.17-.646.305-.936.408-.29.103-.544.17-.762.199-.523-.235-.784-.949-.784-2.14a7.548 7.548 0 0 1 1.916-5.051 6.183 6.183 0 0 1 1.263-1.103c.436-.28.799-.42 1.09-.42.333 0 .5.214.5.64 0 .736-.486 1.552-1.459 2.449.116.176.265.32.447.43.181.11.359.165.533.165.203 0 .407-.077.61-.231.203-.155.381-.357.534-.607a3.602 3.602 0 0 0 .511-1.83c0-.707-.203-1.25-.61-1.633-.406-.382-.987-.574-1.742-.574-.77 0-1.513.188-2.232.563A6.931 6.931 0 0 0 15.64 7.82a7.486 7.486 0 0 0-1.35 2.095 6.067 6.067 0 0 0-.512 2.438c0 .573.09 1.125.272 1.654.182.53.429 1 .74 1.412.313.412.68.746 1.1 1.004.422.257.872.408 1.351.452Zm17.938.022c.378 0 .719-.077 1.024-.232.305-.154.602-.349.893-.584 0-.074-.008-.155-.022-.243a.327.327 0 0 0-.153-.22c-.072 0-.185.033-.337.099-.153.066-.316.1-.49.1a.476.476 0 0 1-.37-.144c-.088-.096-.131-.298-.131-.607 0-.53.12-1.125.36-1.787.239-.661.511-1.334.816-2.018.305-.684.606-1.335.904-1.952.297-.618.512-1.147.642-1.588a1.23 1.23 0 0 0-.533-.673 1.546 1.546 0 0 0-.817-.232c-.421 0-.868.155-1.34.463-.471.31-.983.75-1.535 1.324a26.323 26.323 0 0 0-1.764 2.062 92.457 92.457 0 0 0-2.004 2.68c.044-.308.196-.724.458-1.246.261-.522.544-1.062.85-1.621.304-.559.59-1.092.86-1.6.268-.507.439-.907.511-1.202-.014-.044-.08-.106-.196-.187a3.683 3.683 0 0 0-.435-.254 3.25 3.25 0 0 0-.567-.22 2.046 2.046 0 0 0-.566-.089c-.465 0-.987.236-1.568.706-.58.47-1.165 1.044-1.753 1.72a32.77 32.77 0 0 0-1.72 2.163 95.546 95.546 0 0 0-1.45 2.03 6.325 6.325 0 0 1 .545-1.788c.276-.588.581-1.161.915-1.72.334-.56.653-1.092.958-1.6.305-.507.53-.988.676-1.444-.363-.368-.708-.647-1.035-.839a3.726 3.726 0 0 0-1.1-.419 71.842 71.842 0 0 0-1.535 2.912 21.24 21.24 0 0 0-1.296 3.199 13.377 13.377 0 0 0-.403 1.632c-.094.53-.149.97-.163 1.323.072.398.181.758.326 1.081.146.324.407.625.784.905.16-.103.418-.441.774-1.015.355-.573.802-1.243 1.339-2.007a47.74 47.74 0 0 1 1.307-1.754c.464-.596.914-1.132 1.35-1.61a10.87 10.87 0 0 1 1.22-1.17c.377-.3.675-.459.893-.474-.45.647-.832 1.261-1.144 1.842a16.12 16.12 0 0 0-.784 1.666c-.21.53-.381 1.04-.512 1.533-.13.492-.232.967-.305 1.423.102.382.269.702.501.96.233.256.508.451.828.584.232-.28.515-.655.85-1.125.333-.47.693-.975 1.077-1.511a71.34 71.34 0 0 1 1.198-1.622c.414-.544.813-1.04 1.198-1.489.385-.448.744-.816 1.078-1.103.334-.286.617-.437.85-.452-.146.31-.32.658-.523 1.048s-.396.809-.577 1.257c-.182.449-.338.92-.469 1.412-.13.493-.196.99-.196 1.49 0 .308.03.595.088.86.058.264.16.5.304.705.146.206.33.368.556.486.225.117.512.176.86.176Zm6.744.199c.697-.162 1.433-.534 2.21-1.114.777-.581 1.492-1.313 2.145-2.195a4.468 4.468 0 0 0-.37-.375c-.232.25-.497.525-.795.827-.297.301-.617.58-.958.838-.341.258-.7.474-1.078.65a2.7 2.7 0 0 1-1.154.266.75.75 0 0 1-.501-.166 1.097 1.097 0 0 1-.305-.43 2.372 2.372 0 0 1-.153-.573 4.266 4.266 0 0 1-.032-.894c.007-.095.01-.187.01-.276.93-.367 1.743-.75 2.44-1.147a8.128 8.128 0 0 0 1.775-1.334 5.13 5.13 0 0 0 1.121-1.72c.262-.655.422-1.438.48-2.35-.581-.75-1.206-1.17-1.873-1.257-.48 0-.962.11-1.449.33-.486.221-.958.523-1.415.905a8.67 8.67 0 0 0-1.285 1.345 10.45 10.45 0 0 0-1.046 1.644 9.115 9.115 0 0 0-.697 1.809 7.117 7.117 0 0 0-.25 1.842c0 .882.28 1.636.838 2.26.56.626 1.34.997 2.342 1.115Zm-.806-4.28a8.966 8.966 0 0 1 .719-1.897 8.417 8.417 0 0 1 1.012-1.544c.37-.441.766-.794 1.187-1.059.421-.265.828-.426 1.22-.485-.058 1.015-.472 1.952-1.242 2.812-.77.86-1.735 1.585-2.896 2.173ZM55.344 18c-.043-.059-.065-.213-.065-.463 0-.544.07-1.258.207-2.14.138-.882.33-1.838.577-2.868.247-1.029.537-2.091.871-3.187a43.251 43.251 0 0 1 1.078-3.121 24.34 24.34 0 0 1 1.198-2.636c.414-.772.831-1.35 1.253-1.732-.059-.132-.19-.276-.392-.43a5.09 5.09 0 0 0-.676-.43 7.166 7.166 0 0 0-.73-.342 2.286 2.286 0 0 0-.576-.166c-.276.294-.588.78-.937 1.456a28.716 28.716 0 0 0-1.067 2.36 55.028 55.028 0 0 0-1.067 2.88 51.904 51.904 0 0 0-.926 3c-.268.977-.486 1.889-.653 2.734-.167.846-.25 1.534-.25 2.063 0 .132.014.301.043.507.029.206.069.408.12.607.05.198.112.379.185.54.072.162.16.265.261.31a.63.63 0 0 1 .294.253c.066.11.138.22.218.33.08.111.192.214.338.31.145.095.377.15.696.165Zm3.87-.662c.173-.103.38-.312.62-.628.24-.317.519-.703.838-1.159a34.21 34.21 0 0 1 1.666-2.161 26.643 26.643 0 0 1 1.84-1.964c.422-.426.814-.742 1.177-.948.363-.206.559-.309.588-.309a50.21 50.21 0 0 0-.61 1.511c-.16.42-.283.78-.37 1.081a5.45 5.45 0 0 0-.174.783 4.607 4.607 0 0 0 .044 1.511c.057.287.163.533.315.74.152.205.363.37.632.495.268.125.613.188 1.034.188.13 0 .28-.03.447-.088.167-.06.337-.133.511-.22.175-.09.342-.185.501-.288.16-.103.298-.206.414-.308a.728.728 0 0 0-.054-.254c-.037-.096-.084-.158-.142-.188-.102 0-.24.037-.414.11-.174.074-.34.11-.5.11-.175 0-.31-.05-.404-.153-.094-.103-.141-.339-.141-.706 0-.456.08-.964.24-1.522.16-.56.359-1.107.598-1.644.24-.537.487-1.037.74-1.5.255-.463.484-.827.687-1.092.203-.235.36-.378.468-.43.109-.051.163-.092.163-.121a3.353 3.353 0 0 0-.598-.805 1.278 1.278 0 0 0-.948-.386c-.348 0-.733.121-1.154.364a8.866 8.866 0 0 0-1.252.882c-.414.346-.81.713-1.187 1.103-.378.39-.705.732-.98 1.026-.131.132-.313.334-.545.606-.232.272-.483.574-.751.905-.269.33-.545.661-.828.992-.283.331-.54.622-.773.872.044-.339.2-.769.468-1.29.269-.523.57-1.074.904-1.655.334-.581.668-1.15 1.002-1.71.334-.559.58-1.037.74-1.434a4.088 4.088 0 0 0-.74-1.334c-.334-.405-.69-.666-1.067-.783-.116.059-.403.456-.86 1.19-.458.736-.962 1.75-1.514 3.045a28.09 28.09 0 0 0-.675 1.72 20.967 20.967 0 0 0-.839 3.067c-.08.426-.12.78-.12 1.059.073.338.182.665.327.981.145.316.37.563.675.74Zm14.583-.463c.247-.044.534-.15.86-.32a9.454 9.454 0 0 0 2.015-1.423c.32-.294.603-.595.85-.904a.555.555 0 0 0-.066-.243.548.548 0 0 0-.152-.198 14.303 14.303 0 0 1-2.07 1.29c-.333.17-.645.305-.936.408-.29.103-.544.17-.762.199-.523-.235-.784-.949-.784-2.14a7.548 7.548 0 0 1 1.916-5.051 6.183 6.183 0 0 1 1.264-1.103c.435-.28.798-.42 1.089-.42.333 0 .5.214.5.64 0 .736-.486 1.552-1.459 2.449.116.176.265.32.447.43.181.11.36.165.533.165.204 0 .407-.077.61-.231.203-.155.381-.357.534-.607a3.602 3.602 0 0 0 .512-1.83c0-.707-.204-1.25-.61-1.633-.407-.382-.988-.574-1.743-.574-.77 0-1.513.188-2.232.563a6.931 6.931 0 0 0-1.917 1.478 7.486 7.486 0 0 0-1.35 2.095 6.067 6.067 0 0 0-.512 2.438c0 .573.091 1.125.273 1.654.181.53.428 1 .74 1.412.312.412.679.746 1.1 1.004.421.257.871.408 1.35.452Zm5.916.199c.13 0 .298-.056.501-.166a3.55 3.55 0 0 0 .643-.463c.225-.199.439-.43.642-.695a4.12 4.12 0 0 0 .501-.838 2.479 2.479 0 0 0-.577-.607 5.877 5.877 0 0 0-.806-.53 4.983 4.983 0 0 0-.828-.363 2.226 2.226 0 0 0-.664-.133c-.029.133-.08.328-.152.585-.073.257-.145.53-.218.816-.073.287-.134.57-.185.85-.051.279-.076.507-.076.683.072.206.236.394.49.563.254.169.497.268.73.298Z" fill="#334155" fillRule="nonzero" />
                  </svg>
                </div>
              </header>
              <div className="grow mb-3">
                <p className="text-slate-500 italic">Tidy has been the system to drive change in collaboration on content for our organisation.</p>
              </div>
              <footer className="text-sm font-medium">
                <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Jeff Wong</a>
                <span className="text-slate-300"> · </span>
                <span className="text-slate-500">CEO, Acme Inc.</span>
              </footer>
              <div className="text-right">
                <a className="inline-flex font-semibold text-blue-600 hover:underline mt-5 group" href="#0">Read Story <span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
              </div>
            </article>
            {/* 3rd Story */}
            <article className="h-full flex flex-col bg-white p-6 shadow-xl" data-aos="fade-up" data-aos-delay={200}>
              <header>
                <div className="flex items-center mb-4">
                  <div className="relative mr-5">
                    <Image className="rounded-full shrink-0" src={Testimonial03} width={48} height={48} alt="Testimonial 03" />
                    <div className="absolute top-0 right-0 -mr-2" aria-hidden="true">
                      <svg className="fill-blue-600" width="20" height="16" viewBox="0 0 20 16">
                        <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                      </svg>
                    </div>
                  </div>
                  {/* Acme Inc. logo */}
                  <svg className="shrink-0" width="82" height="18">
                    <path d="M1.851 17.912c.044-.618.142-1.28.294-1.986.153-.705.352-1.411.6-2.117.217-.662.478-1.32.783-1.974.305-.655.632-1.313.98-1.975.45.015.911.033 1.383.055.472.023.915.04 1.329.056.414.014.787.033 1.121.055.334.022.603.04.806.055-.16 1-.272 1.97-.337 2.912a40.131 40.131 0 0 0-.098 2.78v.584c0 .183.007.37.021.562.044.088.156.191.338.309.181.118.4.224.653.32.254.095.516.176.784.242.269.067.505.1.708.1h.174a.191.191 0 0 0 .088-.022c-.03-.368-.044-.72-.044-1.06v-.992a37.49 37.49 0 0 1 .261-4.522c.305-2.368.69-4.4 1.155-6.1.464-1.698.936-2.973 1.415-3.826-.029-.103-.17-.232-.424-.386a8.024 8.024 0 0 0-.872-.453 8.228 8.228 0 0 0-1.001-.375C11.626.051 11.354 0 11.15 0c0 .03-.004.08-.011.154a6.536 6.536 0 0 1-.033.265c-.595.324-1.22.761-1.873 1.313a19.894 19.894 0 0 0-1.96 1.919 33.836 33.836 0 0 0-1.949 2.393A31.197 31.197 0 0 0 3.506 8.78c-.667.118-1.205.258-1.611.42-.407.161-.654.352-.74.573.188 0 .431.004.729.011.298.007.635.018 1.013.033-.45.809-.853 1.566-1.21 2.272a39.58 39.58 0 0 0-.914 1.93C.52 14.6.327 15.103.196 15.53c-.13.427-.196.758-.196.993 0 .309.134.566.403.772.269.206.751.412 1.448.618Zm3.42-9.353c.45-.735.918-1.43 1.404-2.085.487-.654.966-1.242 1.438-1.764s.929-.96 1.372-1.313c.443-.353.846-.596 1.209-.728-.073.397-.15.776-.23 1.136-.079.36-.148.644-.206.85-.16.632-.309 1.253-.447 1.863a51.69 51.69 0 0 0-.38 1.842c-1.554.03-2.94.096-4.16.199Zm11.97 8.316c.247-.044.534-.15.86-.32a9.454 9.454 0 0 0 2.015-1.423c.32-.294.602-.595.85-.904a.555.555 0 0 0-.066-.243.548.548 0 0 0-.153-.198 14.303 14.303 0 0 1-2.069 1.29c-.333.17-.646.305-.936.408-.29.103-.544.17-.762.199-.523-.235-.784-.949-.784-2.14a7.548 7.548 0 0 1 1.916-5.051 6.183 6.183 0 0 1 1.263-1.103c.436-.28.799-.42 1.09-.42.333 0 .5.214.5.64 0 .736-.486 1.552-1.459 2.449.116.176.265.32.447.43.181.11.359.165.533.165.203 0 .407-.077.61-.231.203-.155.381-.357.534-.607a3.602 3.602 0 0 0 .511-1.83c0-.707-.203-1.25-.61-1.633-.406-.382-.987-.574-1.742-.574-.77 0-1.513.188-2.232.563A6.931 6.931 0 0 0 15.64 7.82a7.486 7.486 0 0 0-1.35 2.095 6.067 6.067 0 0 0-.512 2.438c0 .573.09 1.125.272 1.654.182.53.429 1 .74 1.412.313.412.68.746 1.1 1.004.422.257.872.408 1.351.452Zm17.938.022c.378 0 .719-.077 1.024-.232.305-.154.602-.349.893-.584 0-.074-.008-.155-.022-.243a.327.327 0 0 0-.153-.22c-.072 0-.185.033-.337.099-.153.066-.316.1-.49.1a.476.476 0 0 1-.37-.144c-.088-.096-.131-.298-.131-.607 0-.53.12-1.125.36-1.787.239-.661.511-1.334.816-2.018.305-.684.606-1.335.904-1.952.297-.618.512-1.147.642-1.588a1.23 1.23 0 0 0-.533-.673 1.546 1.546 0 0 0-.817-.232c-.421 0-.868.155-1.34.463-.471.31-.983.75-1.535 1.324a26.323 26.323 0 0 0-1.764 2.062 92.457 92.457 0 0 0-2.004 2.68c.044-.308.196-.724.458-1.246.261-.522.544-1.062.85-1.621.304-.559.59-1.092.86-1.6.268-.507.439-.907.511-1.202-.014-.044-.08-.106-.196-.187a3.683 3.683 0 0 0-.435-.254 3.25 3.25 0 0 0-.567-.22 2.046 2.046 0 0 0-.566-.089c-.465 0-.987.236-1.568.706-.58.47-1.165 1.044-1.753 1.72a32.77 32.77 0 0 0-1.72 2.163 95.546 95.546 0 0 0-1.45 2.03 6.325 6.325 0 0 1 .545-1.788c.276-.588.581-1.161.915-1.72.334-.56.653-1.092.958-1.6.305-.507.53-.988.676-1.444-.363-.368-.708-.647-1.035-.839a3.726 3.726 0 0 0-1.1-.419 71.842 71.842 0 0 0-1.535 2.912 21.24 21.24 0 0 0-1.296 3.199 13.377 13.377 0 0 0-.403 1.632c-.094.53-.149.97-.163 1.323.072.398.181.758.326 1.081.146.324.407.625.784.905.16-.103.418-.441.774-1.015.355-.573.802-1.243 1.339-2.007a47.74 47.74 0 0 1 1.307-1.754c.464-.596.914-1.132 1.35-1.61a10.87 10.87 0 0 1 1.22-1.17c.377-.3.675-.459.893-.474-.45.647-.832 1.261-1.144 1.842a16.12 16.12 0 0 0-.784 1.666c-.21.53-.381 1.04-.512 1.533-.13.492-.232.967-.305 1.423.102.382.269.702.501.96.233.256.508.451.828.584.232-.28.515-.655.85-1.125.333-.47.693-.975 1.077-1.511a71.34 71.34 0 0 1 1.198-1.622c.414-.544.813-1.04 1.198-1.489.385-.448.744-.816 1.078-1.103.334-.286.617-.437.85-.452-.146.31-.32.658-.523 1.048s-.396.809-.577 1.257c-.182.449-.338.92-.469 1.412-.13.493-.196.99-.196 1.49 0 .308.03.595.088.86.058.264.16.5.304.705.146.206.33.368.556.486.225.117.512.176.86.176Zm6.744.199c.697-.162 1.433-.534 2.21-1.114.777-.581 1.492-1.313 2.145-2.195a4.468 4.468 0 0 0-.37-.375c-.232.25-.497.525-.795.827-.297.301-.617.58-.958.838-.341.258-.7.474-1.078.65a2.7 2.7 0 0 1-1.154.266.75.75 0 0 1-.501-.166 1.097 1.097 0 0 1-.305-.43 2.372 2.372 0 0 1-.153-.573 4.266 4.266 0 0 1-.032-.894c.007-.095.01-.187.01-.276.93-.367 1.743-.75 2.44-1.147a8.128 8.128 0 0 0 1.775-1.334 5.13 5.13 0 0 0 1.121-1.72c.262-.655.422-1.438.48-2.35-.581-.75-1.206-1.17-1.873-1.257-.48 0-.962.11-1.449.33-.486.221-.958.523-1.415.905a8.67 8.67 0 0 0-1.285 1.345 10.45 10.45 0 0 0-1.046 1.644 9.115 9.115 0 0 0-.697 1.809 7.117 7.117 0 0 0-.25 1.842c0 .882.28 1.636.838 2.26.56.626 1.34.997 2.342 1.115Zm-.806-4.28a8.966 8.966 0 0 1 .719-1.897 8.417 8.417 0 0 1 1.012-1.544c.37-.441.766-.794 1.187-1.059.421-.265.828-.426 1.22-.485-.058 1.015-.472 1.952-1.242 2.812-.77.86-1.735 1.585-2.896 2.173ZM55.344 18c-.043-.059-.065-.213-.065-.463 0-.544.07-1.258.207-2.14.138-.882.33-1.838.577-2.868.247-1.029.537-2.091.871-3.187a43.251 43.251 0 0 1 1.078-3.121 24.34 24.34 0 0 1 1.198-2.636c.414-.772.831-1.35 1.253-1.732-.059-.132-.19-.276-.392-.43a5.09 5.09 0 0 0-.676-.43 7.166 7.166 0 0 0-.73-.342 2.286 2.286 0 0 0-.576-.166c-.276.294-.588.78-.937 1.456a28.716 28.716 0 0 0-1.067 2.36 55.028 55.028 0 0 0-1.067 2.88 51.904 51.904 0 0 0-.926 3c-.268.977-.486 1.889-.653 2.734-.167.846-.25 1.534-.25 2.063 0 .132.014.301.043.507.029.206.069.408.12.607.05.198.112.379.185.54.072.162.16.265.261.31a.63.63 0 0 1 .294.253c.066.11.138.22.218.33.08.111.192.214.338.31.145.095.377.15.696.165Zm3.87-.662c.173-.103.38-.312.62-.628.24-.317.519-.703.838-1.159a34.21 34.21 0 0 1 1.666-2.161 26.643 26.643 0 0 1 1.84-1.964c.422-.426.814-.742 1.177-.948.363-.206.559-.309.588-.309a50.21 50.21 0 0 0-.61 1.511c-.16.42-.283.78-.37 1.081a5.45 5.45 0 0 0-.174.783 4.607 4.607 0 0 0 .044 1.511c.057.287.163.533.315.74.152.205.363.37.632.495.268.125.613.188 1.034.188.13 0 .28-.03.447-.088.167-.06.337-.133.511-.22.175-.09.342-.185.501-.288.16-.103.298-.206.414-.308a.728.728 0 0 0-.054-.254c-.037-.096-.084-.158-.142-.188-.102 0-.24.037-.414.11-.174.074-.34.11-.5.11-.175 0-.31-.05-.404-.153-.094-.103-.141-.339-.141-.706 0-.456.08-.964.24-1.522.16-.56.359-1.107.598-1.644.24-.537.487-1.037.74-1.5.255-.463.484-.827.687-1.092.203-.235.36-.378.468-.43.109-.051.163-.092.163-.121a3.353 3.353 0 0 0-.598-.805 1.278 1.278 0 0 0-.948-.386c-.348 0-.733.121-1.154.364a8.866 8.866 0 0 0-1.252.882c-.414.346-.81.713-1.187 1.103-.378.39-.705.732-.98 1.026-.131.132-.313.334-.545.606-.232.272-.483.574-.751.905-.269.33-.545.661-.828.992-.283.331-.54.622-.773.872.044-.339.2-.769.468-1.29.269-.523.57-1.074.904-1.655.334-.581.668-1.15 1.002-1.71.334-.559.58-1.037.74-1.434a4.088 4.088 0 0 0-.74-1.334c-.334-.405-.69-.666-1.067-.783-.116.059-.403.456-.86 1.19-.458.736-.962 1.75-1.514 3.045a28.09 28.09 0 0 0-.675 1.72 20.967 20.967 0 0 0-.839 3.067c-.08.426-.12.78-.12 1.059.073.338.182.665.327.981.145.316.37.563.675.74Zm14.583-.463c.247-.044.534-.15.86-.32a9.454 9.454 0 0 0 2.015-1.423c.32-.294.603-.595.85-.904a.555.555 0 0 0-.066-.243.548.548 0 0 0-.152-.198 14.303 14.303 0 0 1-2.07 1.29c-.333.17-.645.305-.936.408-.29.103-.544.17-.762.199-.523-.235-.784-.949-.784-2.14a7.548 7.548 0 0 1 1.916-5.051 6.183 6.183 0 0 1 1.264-1.103c.435-.28.798-.42 1.089-.42.333 0 .5.214.5.64 0 .736-.486 1.552-1.459 2.449.116.176.265.32.447.43.181.11.36.165.533.165.204 0 .407-.077.61-.231.203-.155.381-.357.534-.607a3.602 3.602 0 0 0 .512-1.83c0-.707-.204-1.25-.61-1.633-.407-.382-.988-.574-1.743-.574-.77 0-1.513.188-2.232.563a6.931 6.931 0 0 0-1.917 1.478 7.486 7.486 0 0 0-1.35 2.095 6.067 6.067 0 0 0-.512 2.438c0 .573.091 1.125.273 1.654.181.53.428 1 .74 1.412.312.412.679.746 1.1 1.004.421.257.871.408 1.35.452Zm5.916.199c.13 0 .298-.056.501-.166a3.55 3.55 0 0 0 .643-.463c.225-.199.439-.43.642-.695a4.12 4.12 0 0 0 .501-.838 2.479 2.479 0 0 0-.577-.607 5.877 5.877 0 0 0-.806-.53 4.983 4.983 0 0 0-.828-.363 2.226 2.226 0 0 0-.664-.133c-.029.133-.08.328-.152.585-.073.257-.145.53-.218.816-.073.287-.134.57-.185.85-.051.279-.076.507-.076.683.072.206.236.394.49.563.254.169.497.268.73.298Z" fill="#334155" fillRule="nonzero" />
                  </svg>
                </div>
              </header>
              <div className="grow mb-3">
                <p className="text-slate-500 italic">Tidy has been the system to drive change in collaboration on content for our organisation.</p>
              </div>
              <footer className="text-sm font-medium">
                <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Amy Tolinski</a>
                <span className="text-slate-300"> · </span>
                <span className="text-slate-500">CEO, Acme Inc.</span>
              </footer>
              <div className="text-right">
                <a className="inline-flex font-semibold text-blue-600 hover:underline mt-5 group" href="#0">Read Story <span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </aside>
  )
}