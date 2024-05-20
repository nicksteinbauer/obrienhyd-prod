import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import DealerList from '../components/obrien/DealerList';
import PageViewViewContentPixel from '~/components/metaPixel/PageViewViewContentPixel';

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = ({data}) => {
  return [
    {
      title: `${
        data?.page.seo.title ? data?.page.seo.title : data?.page.title
      } | O'Brien Watersports`,
    },
  ];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({context}) {
  const {page} = await context.storefront.query(PAGE_QUERY);

  if (!page) {
    throw new Response('Not Found', {status: 404});
  }

  return json({page});
}

export default function Page() {
  /** @type {LoaderReturnData} */
  const {page} = useLoaderData();
  const iframe =
    '<div id="storelocatorwidget" class="dealers-page" style="width:100%;"><p>Loading <a href="https://www.storelocatorwidgets.com">Locator Software</a>...</p></div> <script type="text/javascript" src="//maps.googleapis.com/maps/api/js?key=AIzaSyBmuZ4dB6S3kpFgkUviSfAoP5h9QoH8Pbg&libraries=places"></script> <script type="text/javascript" id="storelocatorscript" data-uid="MKPAHXoXV568tSmJYOG1dMsHyOYmxF5t" data-settings="store_list_layout=Left" src="//cdn.storelocatorwidgets.com/widget/widget.js"></script>';

  return (
    <>
      <PageViewViewContentPixel />
      <div className="collectionPage actualPage">
        <div className="theRest">
          <div className="inside-lg">
            <header>
              <h1>{page.title}</h1>
            </header>
            <main
              className="basicContent"
              dangerouslySetInnerHTML={{__html: page.body}}
            />
            <div
              dangerouslySetInnerHTML={{__html: iframe}}
              className="padd-vert-20"
            />
            <header className="secondHeader">
              <h2>Online Retailers</h2>
            </header>
            <DealerList />
            <International />
          </div>
        </div>
      </div>
    </>
  );
}

function International() {
  return (
    <div className="dealerContainer">
      <header className="secondHeader">
        <h2>International Retailers</h2>
      </header>
      <table className="dealers">
        <tbody>
          <tr>
            <td>Distributor Name</td>
            <td>Country</td>
            <td>Telephone</td>
            <td>Email</td>
            <td>Website</td>
          </tr>
          <tr>
            <td>International Diffusion</td>
            <td>Algeria</td>
            <td>33 9 67 04 10 07</td>
            <td>info@obrien.fr</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.obrien.fr/"
                target="_parent"
              >
                www.obrien.fr
              </a>
            </td>
          </tr>
          <tr>
            <td>AquaSports</td>
            <td>Antigua</td>
            <td>268-462-3474</td>
            <td>aquasportsanu@gmail.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.aquasportsantigua.com/"
                target="_parent"
              >
                www.aquasportsantigua.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Aeromarin SRL</td>
            <td>Argentina</td>
            <td>5411 4746 7745 / 4744-8812</td>
            <td>info@aeromarin.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.aeromarin.com/"
                target="_parent"
              >
                www.aeromarin.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Fun 4 Every 1 Water Sports</td>
            <td>Aruba</td>
            <td>+297-5646069</td>
            <td>omar@fun4every1.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.fun4every1.com/"
                target="_parent"
              >
                www.fun4every1.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Jet Pilot International</td>
            <td>Australia</td>
            <td>+61 7 5665 8444</td>
            <td>customerservice@jpihq.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/https://www.jpihq.com/home/obrien-watersports"
                target="_parent"
              >
                www.jpihq.com/home/obrien-watersports
              </a>
            </td>
          </tr>
          <tr>
            <td>Harbourside Marine Limited</td>
            <td>Bahamas</td>
            <td>305-433-8036</td>
            <td>ian@hbsmarine.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.hbsmarine.com/"
                target="_parent"
              >
                www.hbsmarine.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Skate Shack</td>
            <td>Bahrain</td>
            <td>974 44692532</td>
            <td>info@skate-shack.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.skate-shack.com/"
                target="_parent"
              >
                www.skate-shack.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Marine Power Solutions (Barbados)</td>
            <td>Barbados</td>
            <td>246-435-8127</td>
            <td>alex@mps.bb</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.mps.bb/"
                target="_parent"
              >
                www.mps.bb
              </a>
            </td>
          </tr>
          <tr>
            <td>Kubus Sports</td>
            <td>Belgium</td>
            <td>31 (0) 35 6954695</td>
            <td>info@kubus-sports.nl</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.kubus-sports.nl/"
                target="_parent"
              >
                www.kubus-sports.nl
              </a>
            </td>
          </tr>
          <tr>
            <td>International Diffusion</td>
            <td>Belgium</td>
            <td>33 9 67 04 10 07</td>
            <td>info@obrien.fr</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.obrien.fr/"
                target="_parent"
              >
                www.obrien.fr
              </a>
            </td>
          </tr>
          <tr>
            <td>Regatta</td>
            <td>Brazil</td>
            <td>55 11 3030-3400</td>
            <td>telemarketing@regatta.com.br</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.regatta.com.br/"
                target="_parent"
              >
                www.regatta.com.br
              </a>
            </td>
          </tr>
          <tr>
            <td>Snow &amp; Wake Bulgaria</td>
            <td>Bulgaria</td>
            <td>+359 879 371 665</td>
            <td>snowandwakebulgaria@gmail.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.snowandwakebulgaria.com/"
                target="_parent"
              >
                www.snowandwakebulgaria.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Comercial Valle Amarillo</td>
            <td>Chile</td>
            <td>56 22466874</td>
            <td>danielhofmann@lbs.cl</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.labolsadelski.com/"
                target="_parent"
              >
                www.labolsadelski.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Wasi d.o.o.</td>
            <td>Croatia</td>
            <td>00385 91 6767 209</td>
            <td>irena.komadina@wasi.hr</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.wasi.hr/"
                target="_parent"
              >
                www.wasi.hr
              </a>
            </td>
          </tr>
          <tr>
            <td>Force 8 Sports</td>
            <td>Cyprus</td>
            <td>357 25 579919</td>
            <td>lakis.m@force-8.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.force-8.com/"
                target="_parent"
              >
                www.force-8.com
              </a>
            </td>
          </tr>
          <tr>
            <td>BORO spol. s r.o.</td>
            <td>Czech Republic</td>
            <td>+420 603444096</td>
            <td>info@water-ski.cz</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.water-ski.cz/"
                target="_parent"
              >
                www.water-ski.cz
              </a>
            </td>
          </tr>
          <tr>
            <td>Recuerdo Marino (aka Carib Wind Cabarete)</td>
            <td>Dominican Republic</td>
            <td>809 571 0640</td>
            <td>ari@caribwind.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.caribwindcabarete.com/"
                target="_parent"
              >
                www.caribwindcabarete.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Obsession Water Sports</td>
            <td>Dutch Caribbean</td>
            <td>599 97365659</td>
            <td>galmeyer@carib-online.net</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Nautix Ltd.</td>
            <td>Egypt</td>
            <td>2 (02) 2 390-2027</td>
            <td>obrien@nautix.com.eg</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Vesiurheilu.fi</td>
            <td>Finland</td>
            <td>358 (0)45 8417 744</td>
            <td>info@vesiurheilu.fi</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.vesiurheilu.fi/"
                target="_parent"
              >
                www.vesiurheilu.fi
              </a>
            </td>
          </tr>
          <tr>
            <td>International Diffusion</td>
            <td>France</td>
            <td>33 9 67 04 10 07</td>
            <td>info@obrien.fr</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.obrien.fr/"
                target="_parent"
              >
                www.obrien.fr
              </a>
            </td>
          </tr>
          <tr>
            <td>Langenfeld Distribution</td>
            <td>Germany</td>
            <td>+49 2173 3946 2200</td>
            <td>Karsten@la-distr.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.la-distr.com/"
                target="_parent"
              >
                www.la-distr.com
              </a>
            </td>
          </tr>
          <tr>
            <td>ON AQUA</td>
            <td>Greece</td>
            <td>302102588950</td>
            <td>hello@onaqua.eu</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.onaqua.eu/"
                target="_parent"
              >
                www.onaqua.eu
              </a>
            </td>
          </tr>
          <tr>
            <td>Aqua Sport</td>
            <td>Guatemala</td>
            <td>502 23673531/32</td>
            <td>sales@aquasportgt.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.aquasportgt.com/index.php"
                target="_parent"
              >
                www.aquaportgt.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Maritime Kft</td>
            <td>Hungary</td>
            <td>0036-136-74905</td>
            <td>maritime@hu.inter.net</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.maritime.hu/"
                target="_parent"
              >
                www.maritime.hu
              </a>
            </td>
          </tr>
          <tr>
            <td>Ultra Sports</td>
            <td>Ireland</td>
            <td>01332 813 150</td>
            <td>info@ultrasporteu.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.ultrasporteu.com/"
                target="_parent"
              >
                www.ultrasporteu.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Avnir Motor Co. Ltd.</td>
            <td>Israel</td>
            <td>03 972 3 5158898</td>
            <td>s_wiener@oferavnir.co.il</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>VENINI SPORT SAS</td>
            <td>Italy</td>
            <td>+39 335 5491579</td>
            <td>info@veninisport.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.obrienitaly.it/"
                target="_parent"
              >
                www.obrienitaly.it
              </a>
            </td>
          </tr>
          <tr>
            <td>UNIMAT M &amp; C</td>
            <td>Japan</td>
            <td>81 48 949 1117</td>
            <td>n.kunugiyama@unimatmarine.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.unimatmarine.com/"
                target="_parent"
              >
                www.unimatmarine.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Kuwait Development &amp; Trading</td>
            <td>Kuwait</td>
            <td>965 481 5517</td>
            <td>ktco@qualitynet.net</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>S.D.K. Ltd.</td>
            <td>Latvia</td>
            <td>00371 67520275</td>
            <td>sdk@sdk.lv</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.sdk.lv/"
                target="_parent"
              >
                www.sdk.lv
              </a>
            </td>
          </tr>
          <tr>
            <td>Kyriakos Freres</td>
            <td>Lebanon</td>
            <td>961 1 362 752 / 3 &amp; 4</td>
            <td>kyriakos@kyriakos-lb.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.kyriakos-lb.com/"
                target="_parent"
              >
                www.kyriakos-lb.com
              </a>
            </td>
          </tr>
          <tr>
            <td>UAB Soulshack</td>
            <td>Lithuania</td>
            <td>+447807680340</td>
            <td>info@soulshack.lt</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Kubus Sports</td>
            <td>Luxembourg</td>
            <td>31 (0) 35 6954695</td>
            <td>info@kubus-sports.nl</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.kubus-sports.nl/"
                target="_parent"
              >
                www.kubus-sports.nl
              </a>
            </td>
          </tr>
          <tr>
            <td>Extreme Maldives</td>
            <td>Maldives</td>
            <td>960 7792157</td>
            <td>shop@extrememaldives.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.extrememaldives.com/"
                target="_parent"
              >
                www.extrememaldives.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Entreprise Corinne DEPAZ</td>
            <td>Martinique, F.W.I</td>
            <td>0696 98 81 60</td>
            <td>corinne.depaz@wanadoo.fr</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Marine Silcer SA de CV</td>
            <td>Mexico</td>
            <td>969-934-0491</td>
            <td>ventas@marinasilcer.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.marinasilcer.com/"
                target="_parent"
              >
                www.marinasilcer.com
              </a>
            </td>
          </tr>
          <tr>
            <td>International Diffusion</td>
            <td>Morocco</td>
            <td>33 9 67 04 10 07</td>
            <td>info@obrien.fr</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.obrien.fr/"
                target="_parent"
              >
                www.obrien.fr
              </a>
            </td>
          </tr>
          <tr>
            <td>Kubus Sports</td>
            <td>Netherlands</td>
            <td>31 (0) 35 6954695</td>
            <td>info@kubus-sports.nl</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.kubus-sports.nl/"
                target="_parent"
              >
                www.kubus-sports.nl
              </a>
            </td>
          </tr>
          <tr>
            <td>Wake Action Sports</td>
            <td>New Zealand</td>
            <td>0064 27 4462692</td>
            <td>bruce@wakeaction.co.nz</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.obriennewzealand.co.nz/"
                target="_parent"
              >
                www.obriennewzealand.co.nz
              </a>
            </td>
          </tr>
          <tr>
            <td>Fluid</td>
            <td>Norway</td>
            <td>0047 98219496</td>
            <td>mail@fluid.no</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.fluid.no/"
                target="_parent"
              >
                www.fluid.no
              </a>
            </td>
          </tr>
          <tr>
            <td>Eurokontrakt</td>
            <td>Poland</td>
            <td>0048-713414133</td>
            <td>biuro@eurokontrakt.pl</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.megadecha.pl/"
                target="_parent"
              >
                www.megadecha.pl
              </a>
            </td>
          </tr>
          <tr>
            <td>Rota Nautica</td>
            <td>Portugal</td>
            <td>00 351 253 686 137</td>
            <td>geral@rotanautica.pt</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.rotanautica.pt/"
                target="_parent"
              >
                www.rotanautica.pt
              </a>
            </td>
          </tr>
          <tr>
            <td>Skate Shack</td>
            <td>Qatar</td>
            <td>974 44692532</td>
            <td>info@skate-shack.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.skate-shack.com/"
                target="_parent"
              >
                www.skate-shack.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Action Sport LLC</td>
            <td>Russia</td>
            <td>7 499 181 3749</td>
            <td>info@obrien.ru</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.obrien.ru/"
                target="_parent"
              >
                www.obrien.ru
              </a>
            </td>
          </tr>
          <tr>
            <td>Igor Loncaric</td>
            <td>Serbia</td>
            <td>&nbsp;</td>
            <td>igorloncaric@yahoo.com</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>The Boardshop (Singapore)</td>
            <td>Singapore</td>
            <td>miketanth@gmail.com</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Manex &amp; Power Marine</td>
            <td>South Africa</td>
            <td>27 (0)21 511 7292</td>
            <td>gary.sindler@manex.co.za</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.manex.co.za/"
                target="_parent"
              >
                www.manex.co.za
              </a>
            </td>
          </tr>
          <tr>
            <td>Marine Land Ltd.</td>
            <td>South Korea</td>
            <td>82 41 564 5221</td>
            <td>&nbsp;</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.marineland.kr/"
                target="_parent"
              >
                www.marineland.kr
              </a>
            </td>
          </tr>
          <tr>
            <td>Recambios Marinos, s.l.</td>
            <td>Spain</td>
            <td>34 936 626 655</td>
            <td>manuela@recambiosmarinos.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.recambiosmarinos.com/"
                target="_parent"
              >
                www.recambiosmarinos.com
              </a>
            </td>
          </tr>
          <tr>
            <td>The Scuba Shop</td>
            <td>St. Maarten</td>
            <td>1 721 545 3213</td>
            <td>info@thescubashop.net</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.thescubashop.net/"
                target="_parent"
              >
                www.thescubashop.net
              </a>
            </td>
          </tr>
          <tr>
            <td>Extra Evil</td>
            <td>Sweden</td>
            <td>46 (0)63 12 12 26</td>
            <td>info@vattensport.nu</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.vattensport.nu/"
                target="_parent"
              >
                www.vattensport.nu
              </a>
            </td>
          </tr>
          <tr>
            <td>Next One Distribution</td>
            <td>Switzerland</td>
            <td>41 22 755 55 50</td>
            <td>info@sport137.ch</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.sport137.ch/"
                target="_parent"
              >
                www.sport137.ch
              </a>
            </td>
          </tr>
          <tr>
            <td>Anthem Wake Park</td>
            <td>Thailand</td>
            <td>+66 (0)76 620 033-4</td>
            <td>yok@anthemwakepark.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.anthemwakepark.com/"
                target="_parent"
              >
                www.anthemwakepark.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Phuriwat Phattranonarnan</td>
            <td>Thailand</td>
            <td>+668-2441-4199</td>
            <td>devilnz1@gmail.com</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>International Diffusion</td>
            <td>Tunisia</td>
            <td>33 9 67 04 10 07</td>
            <td>info@obrien.fr</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.obrien.fr/"
                target="_parent"
              >
                www.obrien.fr
              </a>
            </td>
          </tr>
          <tr>
            <td>AKYOL Denizcilik Ltd. Sti</td>
            <td>Turkey</td>
            <td>90 242 746 84 20</td>
            <td>info@akyoldenizcilik.com.tr</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.marinacim.com/"
                target="_parent"
              >
                www.marinacim.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Sea Zone</td>
            <td>United Arab Emirates</td>
            <td>+971 50 7449443</td>
            <td>jamil@seazoneuae.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.seazoneuae.com/"
                target="_parent"
              >
                www.seazoneuae.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Ultra Sport</td>
            <td>United Kingdom</td>
            <td>01332 813 150</td>
            <td>info@ultrasporteu.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.ultrasporteu.com/"
                target="_parent"
              >
                www.ultrasporteu.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Nautique House</td>
            <td>Uruguay</td>
            <td>598 2409 8005</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/mailto:info@nautiquehouse.com"
                target="_parent"
              >
                info@nautiquehouse.com
              </a>
            </td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://www.sunvalleysurf.com/"
                target="_parent"
              >
                www.nautiquehouse.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Commerce Wealthy CO LTD</td>
            <td>Vietnam</td>
            <td>(84) 0918714367</td>
            <td>sales@kayakvn.com</td>
            <td>
              <a
                href="https://web.archive.org/web/20230305193106/http://kayakvn.com/"
                target="_parent"
              >
                http://kayakvn.com
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const PAGE_QUERY = `#graphql
  query PageDealers(
    $language: LanguageCode,
    $country: CountryCode,
  )
  @inContext(language: $language, country: $country) {
    page(handle: "dealers") {
      id
      title
      body
      seo {
        description
        title
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
