import React from 'react'

export default function Footer() {
  return (
    // <!-- Footer container -->
<footer
  class="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-[#045501] dark:text-white lg:text-left">
  <div class="container p-6">
    <div class="grid place-items-center md:grid-cols-2 lg:grid-cols-4">
      {/* <!-- First links section --> */}
      <div class="mb-6">
        <h5 class="mb-2.5 font-bold uppercase">Links</h5>

        <ul class="mb-0 list-none">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>
      </div>

      {/* <!-- Second links section --> */}
      <div class="mb-6">
        <h5 class="mb-2.5 font-bold uppercase">Links</h5>

        <ul class="mb-0 list-none">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>
      </div>

      {/* <!-- Third links section --> */}
      <div class="mb-6">
        <h5 class="mb-2.5 font-bold uppercase">Links</h5>

        <ul class="mb-0 list-none">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>
      </div>

      {/* <!-- Fourth links section --> */}
      <div class="mb-6">
        <h5 class="mb-2.5 font-bold uppercase">Links</h5>

        <ul class="mb-0 list-none">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* <!-- Copyright section --> */}
  <div class="w-full bg-black/5 p-4 text-center">
    © 2023 Copyright:
    <a href="https://tw-elements.com/">TW Elements</a>
  </div>
</footer>
  )
}