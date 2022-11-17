import losangoTitle from "../../Assets/Icons/losangoTitle.png";
import losango from "../../Assets/Icons/losango.png";

const Roadmap = () => {
  return (
    <section id="roadmap" className="w-full flex justify-center bg-white">
      <div className="max-w-screen-xl w-full p-5 sm:p-10">
        <div className="w-full flex justify-end">
          <span className="border-[2px] border-black rounded-xl w-[40%]"></span>
        </div>

        <div className="w-full border-[5px] border-black rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl mt-1"></div>
        <div className="w-full flex justify-end">
          <span className="border-[10px] border-black rounded-bl-3xl rounded-br-2xl w-[20%]"></span>
        </div>
        <h2 className="text-[50px] font-ChakraPetch font-bold">Roadmap</h2>
        <h3 className="text-xl font-bold font-ChakraPetch mb-10 mt-[-5px]">
          Targets and deadlines
        </h3>

        <ol class="w-full flex justify-center font-ChakraPetch font-semibold flex-wrap gap-10">
          <li className="border shadow-xl border-black pb-5 rounded-tl-lg rounded-br-3xl px-10 py-2">
            <div class="flex justify-start items-center gap-3">
              <img src={losangoTitle} className="h-10" alt="" />
              <p className="text-[60px] font-Orbitron font-bold">Q1</p>
            </div>
            <h2 className="text-lg font-bold mb-5 mt-[-20px]">
              First Quarter 2023
            </h2>
            <ul>
              <li className="flex items-center gap-2">
                <img src={losango} alt="" className="w-7" />
                <p>Mint Dapp verified</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={losango} alt="" className="w-7" />
                <p>Add Liquidity</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={losango} alt="" className="w-7" />
                <p>Documentaion</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={losango} alt="" className="w-7" />
                <p>Sicial media groups</p>
              </li>
            </ul>
          </li>
          <li className="border shadow-xl border-black pb-5 rounded-tl-lg rounded-br-3xl px-10 py-2">
            <div class="flex justify-start items-center gap-3">
              <img src={losangoTitle} className="h-10" alt="" />
              <p className="text-[60px] font-Orbitron font-bold">Q2</p>
            </div>
            <h2 className="text-lg font-bold mb-5 mt-[-20px]">
              Second Quarter 2023
            </h2>
            <ul>
              <li className="flex items-center gap-2">
                <img src={losango} alt="" className="w-7" />
                <p>Mint Dapp verified</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={losango} alt="" className="w-7" />
                <p>Add Liquidity</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={losango} alt="" className="w-7" />
                <p>Documentaion</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={losango} alt="" className="w-7" />
                <p>Sicial media groups</p>
              </li>
            </ul>
          </li>
          <li className="border shadow-xl border-black pb-5 rounded-tl-lg rounded-br-3xl px-10 py-2">
            <div class="flex justify-start items-center gap-3">
              <img src={losangoTitle} className="h-10" alt="" />
              <p className="text-[60px] font-Orbitron font-bold">Q3</p>
            </div>
            <h2 className="text-lg font-bold mb-5 mt-[-20px]">
              Third Quarter 2023
            </h2>
            <ul>
              <li className="flex items-center gap-2">
                <img src={losango} alt="" className="w-7" />
                <p>Mint Dapp verified</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={losango} alt="" className="w-7" />
                <p>Add Liquidity</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={losango} alt="" className="w-7" />
                <p>Documentaion</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={losango} alt="" className="w-7" />
                <p>Sicial media groups</p>
              </li>
            </ul>
          </li>
          <li className="border shadow-xl border-black pb-5 rounded-tl-lg rounded-br-3xl px-10 py-2">
            <div class="flex justify-start items-center gap-3">
              <img src={losangoTitle} className="h-10" alt="" />
              <p className="text-[60px] font-Orbitron font-bold">Q4</p>
            </div>
            <h2 className="text-lg font-bold mb-5 mt-[-20px]">
              Last Quarter 2023
            </h2>
            <ul>
              <li className="flex items-center gap-2">
                <img src={losango} alt="" className="w-7" />
                <p>Mint Dapp verified</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={losango} alt="" className="w-7" />
                <p>Add Liquidity</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={losango} alt="" className="w-7" />
                <p>Documentaion</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={losango} alt="" className="w-7" />
                <p>Sicial media groups</p>
              </li>
            </ul>
          </li>
        </ol>

        <div className="w-full border-[3px] border-black rounded-tl-2xl mt-14"></div>
        <div className="w-full flex">
          <span className="border-[5px] border-black rounded-bl-xl rounded-br-2xl w-[15%]"></span>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
