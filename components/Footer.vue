<template>
    <div class="shadow-xl">
        <div class="bg-blue-50 shadow-inner pb-10 pt-5">
            <div class="w-7/12 mx-auto md:flex md:justify-between">
                <div class="font-body mb-8">
                    <p class="mt-1 font-semibold block text-center text-gray-700 uppercase">Enlaces de interés</p>
                    <div>
                        <button class="mt-1 block mx-auto font-gray-800 text-xs font-normal">Inicio</button>
                        <button class="mt-1 block mx-auto font-gray-800 text-xs font-normal">Artículos</button>
                        <button class="mt-1 block mx-auto font-gray-800 text-xs font-normal">Ubicaciones & Horarios</button>
                    </div>
                </div>

                <div class="font-body text-center">
                    <div>

                        <p class="mt-1 font-semibold block text-gray-700 uppercase">Redes sociales</p>
                        <div class="mt-3 mx-auto">
                            <button>
                                <a href='https://www.facebook.com/Marmoler%C3%ADa-Virromar-101283528383166/' target="_blank">
                                    <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 12.0722C0.00157073 18.0118 4.83067 23.0691 11.3896 24V15.5616H7.96472V12.0722H11.3936V9.41596C11.2403 8.15731 11.721 6.9029 12.7053 5.99294C13.6895 5.08298 15.0754 4.61178 16.487 4.70715C17.5002 4.72179 18.5108 4.80249 19.5109 4.94863V7.9176H17.8045C17.2171 7.84878 16.6265 8.0223 16.1991 8.38928C15.7718 8.75626 15.5539 9.27698 15.6068 9.80474V12.0722H19.3475L18.7495 15.5628H15.6068V24C22.7001 22.9974 27.6742 17.2033 26.9255 10.8154C26.1768 4.42748 19.9675 -0.31808 12.796 0.0166677C5.62439 0.351415 0.00114 5.64929 0 12.0722Z" fill="#706A6A"/>
                                    </svg>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>