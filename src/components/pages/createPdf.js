"use strict";
import React from "react";

var GeneratePdf = {
  Cambia: selectedPlans => {
    const markup = `
        <body>
          <div class="container"> <!-- Container Start -->
            
              <!-- mid-container Start -->
              <div class="mid_container">
                  <!-- Header Start -->
                    <div class="header"> 
                        <img src="/img/logo_header.png" alt="Logo" title="Logo" width="180" />
                   
                        <div class="title">
                            <p>This formulary information is prepared for <br><span>${sessionStorage.getItem(
                              "PrescriberName"
                            )}, MD.</span></p>
                        </div>
                    </div>
                    <!-- Header End -->
                    
                    <!-- Message Start -->
                    <div class="message">
                      <p>${sessionStorage.getItem("headerMessage")}.</p>
                    </div>
                    <!-- Message End -->
                    
                    <!-- Table Start -->
                    <p class="table_heading">This includes patients enrolled in the following:</p>
                    <div class="datagrid">
                      <table>
                            <thead>	
                                <tr><th>Channel</th><th>Plan Name</th><th>Formulary Status</th></tr>
                            </thead>
                            <tbody>
                            ${selectedPlans
                              .map(
                                x =>
                                  `<tr>
                                  <td>${x.BenType}</td>
                                  <td>${x.PlanName}</td>
                                  <td>${x.Tier}</td>
                                </tr>`
                              )
                              .join("")}
                            </tbody>
                         </table>
                     </div>
                     <!-- Table End -->
                     
                     <!-- Warning Box Start -->
                     <div class="warning_content">
                       <h4>WARNING: RISK OF SERIOUS CARDIOVASCULAR AND GASTROINTESTINAL EVENTS</h4>
                        
                        <h5>Cardiovascular Thrombotic Events</h5>
                        <ul>
                          <li>Non-steroidal anti-inflammatory drugs (NSAIDs) cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction, and stroke, which can be fatal. This risk may occur early in treatment and may increase with duration of use. </li>
                            <li>CAMBIA® is contraindicated in the setting of coronary artery bypass graft (CABG) surgery.</li>
                        </ul>
                        
                        <h5>Gastrointestinal Risk, Ulceration, and Perforation</h5>
                        <ul>
                          <li>NSAIDs cause an increased risk of serious gastrointestinal (GI) adverse events including bleeding, ulceration, and perforation of the stomach or intestines, which can be fatal. These events can occur at any time during use and without warning symptoms. Elderly patients and patients with a prior history of peptic ulcer disease and/or GI bleeding are at greater risk for serious GI events.</li>
                        </ul>
                     </div>
               <!-- Warning Box End -->
                     
                     <!-- Content Start -->
                     <div class="content">
                       <p>*Data on file. Depomed, Inc. formulary data is sourced from MMIT. Transaction data is sourced from SHA Health. Data is current as of [Month, Year].</p>
                        <p>Because formularies are subject to change, and many health plans offer more than one formulary, please check directly with the health plan to confirm coverage for individual plans. The information provided is not a guarantee of coverage or payment (partial or full). Actual benefits are determined by each plan administrator in accordance with its respective policy and procedures. Please consult health plan for patient specific coverage details.</p>
                        <p>Formulary Tier reported is representative of the coverage of the majority of members covered by the plan. Individual coverage may vary.</p>
                        <p>Your area is determined as the geography associated with all ZIP codes around you that have the same first three digits.</p>
                        <p>Unrestricted access in your area is computed as a ratio of members enrolled in plans that have no prior authorization or step edits for the brand to the total members enrolled in all plans in the area.</p>
                        <p>Copay is computed based on the average cost share for brand claims in your area for members enrolled in plans that have unrestricted access to brand. Only those unrestricted plans that have an average copay value less than the set threshold are displayed.</p>
                        <p>Material developed for communication only to healthcare professionals. Not approved for distribution to patients.</p>
                     </div>
                    <!-- Content Start -->
                     
                     <div class="footer_head">
                       <p>Please see accompanying full Prescribing Information and Medication Guide for more information about CAMBIA®.</p>
                     </div>
                  </div>
                  <!-- mid-container Start -->
                  
                  <!-- Footer Start -->
                  <div class="footer_content">
                    <p>Depomed and the Depomed logo, Cambia® and the Cambia® logo are registered trademarks of Depomed, Inc. or its
        related companies. All other trademarks are the property of their respective owners.</p>
                    <p>© 2016 Depomed, Inc. All rights reserved. Printed in the U.S.A. APL-CAM-0195 Rev. 2 [Month, Year]</p>
                    <img src="/img/logo_footer.png" alt="Depomed Logo" title="Depomed Logo" />
                  </div>
                  <!-- Footer End -->
        
          </div>  <!-- Container End -->
        </body>
        `;
    return markup;
  },
  Butrans: selectedPlans => {
    const markup = `<body>
    <div class="container">
    <!-- Container Start -->
    <!-- mid-container Start -->
    <div class="mid_container">
        <!-- Header Start -->
        <div class="header">
            <img src="/img/butrans_logo.png" alt="Logo" title="Logo" width="180" style="margin-left:225px;" />

            <div class="title">
                <p>[This formulary information <br>is prepared for ${sessionStorage.getItem(
                  "PrescriberName"
                )}, MD.</p>
            </div>
        </div>
        <!-- Header End -->
        <!-- Message Start -->
        <div class="message">
            <p>${sessionStorage.getItem("headerMessage")}</p>
        </div>
        <!-- Message End -->
        <!-- Table Start -->
        <p class="table_heading">This includes patients enrolled in the following:</p>
        <div class="datagrid">
            <table>
                <thead>
                    <tr>
                        <th>Channel</th>
                        <th>Plan Name</th>
                        <th>Formulary Status</th>
                    </tr>
                </thead>

                <tbody>
                ${selectedPlans
                  .map(
                    x =>
                      `<tr>
                      <td>${x.BenType}</td>
                      <td>${x.PlanName}</td>
                      <td>${x.Tier}</td>
                    </tr>`
                  )
                  .join("")}
                </tbody>
            </table>
        </div>
        <!-- Table End -->

        <p class="inclusion_head">Inclusion on formulary does not imply superior clinical efficacy or safety.</p>
        <p class="inclusion_body">Please note that formularies are subject to change. Please check with the health plan directly to confirm coverage
            for individual patients. Patient costs may vary among plans.</p>
        <p class="inclusion_body">Preferred represents available on formulary at the lowest branded co-pay. PDL represents on the Preferred Drug
            List.</p>
        <p class="inclusion_body">i. Computed as patient prescriptions that can be filled with no prior authorization or step edits for Butrans®
            divided by the total prescriptions filled in the area over a three month period.</p>
        <p class="inclusion_body">ii. Only plans with average co-pays for Butrans® that are [CO-PAY THRESHOLD] or less are displayed. The plans’
            co-pay ranges represent the 25th percentile cost up to the 75th percentile cost. Some patients may experience
            co-pays higher than reflected in the message.</p>

        <!-- Warning Box Start -->
        <div class="warning_content">
            <h4>WARNING: ADDICTION, ABUSE and MISUSE; LIFE-THREATENING RESPIRATORY DEPRESSION; ACCIDENTAL EXPOSURE; NEONATAL
                OPIOID WITHDRAWAL SYNDROME; and RISKS FROM CONCOMITANT USE WITH BENZODIAZEPINES OR OTHER CNS DEPRESSANTS
                </h4>

            <div style="width:50%; float:left;">
                <h5>Addiction, Abuse, and Misuse</h5>
                <ul>
                    <li>Butrans® exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which
                        can lead to overdose and death. Assess each patient’s risk prior to prescribing Butrans, and
                        monitor all patients regularly for the development of these behaviors and conditions <span>[see Warnings and Precautions (5.1) and Overdosage (10)].</span>                            </li>
                    <li>CAMBIA® is contraindicated in the setting of coronary artery bypass graft (CABG) surgery.</li>
                </ul>
                <h5>Addiction, Abuse, and Misuse</h5>
                <ul>
                    <li>Butrans® exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which
                        can lead to overdose and death. Assess each patient’s risk prior to prescribing Butrans, and
                        monitor all patients regularly for the development of these behaviors and conditions <span> [see Warnings and Precautions (5.1) and Overdosage (10)].</span>                            </li>
                    <li>CAMBIA® is contraindicated in the setting of coronary artery bypass graft (CABG) surgery.</li>
                </ul>
            </div>

            <div style="width:50%; float:right;">
                <h5>Addiction, Abuse, and Misuse</h5>
                <ul>
                    <li>Butrans® exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which
                        can lead to overdose and death. Assess each patient’s risk prior to prescribing Butrans, and
                        monitor all patients regularly for the development of these behaviors and conditions <span>[see Warnings and Precautions (5.1) and Overdosage (10)].</span>                            </li>
                    <li>CAMBIA® is contraindicated in the setting of coronary artery bypass graft (CABG) surgery.</li>
                </ul>
                <h5>Addiction, Abuse, and Misuse</h5>
                <ul>
                    <li>Butrans® exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which
                        can lead to overdose and death. Assess each patient’s risk prior to prescribing Butrans, and
                        monitor all patients regularly for the development of these behaviors and conditions <span> [see Warnings and Precautions (5.1) and Overdosage (10)].</span>                            </li>
                    <li>CAMBIA® is contraindicated in the setting of coronary artery bypass graft (CABG) surgery.</li>
                </ul>
            </div>
        </div>
        <!-- Warning Box End -->
        <!-- Content Start -->
        <div class="content">
            <p class="pls_read">Please read accompanying Full Prescribing Information, including Boxed Warning above.</p>
            <p class="pls_read_body">SOURCE: All prescriptions data from IMS Health XponentTM PlanTrakTM; Commercial and Medicaid co-pay data
                calculated from IMS Health Formulary Impact AnalyzerTM; Medicare co-pay data calculated from CMS. Formulary
                data from Managed Markets Insight & Technology, LLC, database as of [Month Year].</p>

        </div>
        <!-- Content Start -->

        <div class="footer">
            <img src="/img/logo_footer.png" title="Purdue Logo" width="60" style="float:left; margin-right:15px;" />
            <p class="copyright">©2017 Purdue Pharma L.P., Stamford, CT 06901-3431</p>

            <div style="float:right;width:200px; line-height: 30px;">
                <p style="font-family:'Formata-Bold'; font-size:10pt;color:#6c2769; float:left;">www.Butrans.com</p>
                <p style="font-family:arial; color:#000000; font-size:8pt; margin-left:15pt; float:right;">MR-01486</p>
            </div>
        </div>
    </div>
    <!-- mid-container Start -->
    <!-- Footer End -->

</div>
<!-- Container End -->
    </body>`;
    return markup;
  },
  OxyContin: selectedPlans => {
    const markup = `<body>
    <div class="container">
        <!-- Container Start -->
        <!-- mid-container Start -->
        <div class="mid_container">
            <!-- Header Start -->
            <div class="header">

                <img src="/img/logo_OxiConton.png" alt="Logo" title="Logo" width="180" style="margin-left:225px; margin-top:25px;" />
                <div class="title">
                    <p>This formulary information <br>is prepared for ${sessionStorage.getItem(
                      "PrescriberName"
                    )}, MD.</p>
                </div>

            </div>
            <!-- Header End -->
            <!-- Message Start -->
            <div class="message">
                <p>${sessionStorage.getItem("headerMessage")}</p>
            </div>
            <!-- Message End -->
            <!-- Table Start -->
            <p class="table_heading">This includes patients enrolled in the following:</p>
            <div class="datagrid">
                <table>
                    <thead>
                        <tr>
                            <th>Channel</th>
                            <th>Plan Name</th>
                            <th>Formulary Status</th>
                        </tr>
                    </thead>

                    <tbody>
                    ${selectedPlans
                      .map(
                        x =>
                          `<tr>
                          <td>${x.BenType}</td>
                          <td>${x.PlanName}</td>
                          <td>${x.Tier}</td>
                        </tr>`
                      )
                      .join("")}
                    </tbody>
                </table>
            </div>
            <!-- Table End -->

            <p class="inclusion_head">Inclusion on formulary does not imply superior clinical efficacy or safety.</p>
            <p class="inclusion_body">Please note that formularies are subject to change. Please check with the health plan directly to confirm coverage
                for individual patients. Patient costs may vary among plans.</p>
            <p class="inclusion_body">Preferred represents available on formulary at the lowest branded co-pay. PDL represents on the Preferred Drug
                List.</p>
            <p class="inclusion_body">i. Computed as patient prescriptions that can be filled with no prior authorization or step edits for Butrans®
                divided by the total prescriptions filled in the area over a three month period.</p>
            <p class="inclusion_body">ii. Only plans with average co-pays for Butrans® that are [CO-PAY THRESHOLD] or less are displayed. The plans’
                co-pay ranges represent the 25th percentile cost up to the 75th percentile cost. Some patients may experience
                co-pays higher than reflected in the message.</p>

            <!-- Warning Box Start -->
            <div class="warning_content">
                <h4>WARNING: ADDICTION, ABUSE and MISUSE; LIFE-THREATENING RESPIRATORY DEPRESSION; ACCIDENTAL EXPOSURE; NEONATAL
                    OPIOID WITHDRAWAL SYNDROME; and RISKS FROM CONCOMITANT USE WITH BENZODIAZEPINES OR OTHER CNS DEPRESSANTS
                    </h4>

                <div style="width:50%; float:left;">
                    <h5>Addiction, Abuse, and Misuse</h5>
                    <ul>
                        <li>Butrans® exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which
                            can lead to overdose and death. Assess each patient’s risk prior to prescribing Butrans, and
                            monitor all patients regularly for the development of these behaviors and conditions <span>[see Warnings and Precautions (5.1) and Overdosage (10)].</span>                            </li>
                        <li>CAMBIA® is contraindicated in the setting of coronary artery bypass graft (CABG) surgery.</li>
                    </ul>
                    <h5>Addiction, Abuse, and Misuse</h5>
                    <ul>
                        <li>Butrans® exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which
                            can lead to overdose and death. Assess each patient’s risk prior to prescribing Butrans, and
                            monitor all patients regularly for the development of these behaviors and conditions <span> [see Warnings and Precautions (5.1) and Overdosage (10)].</span>                            </li>
                        <li>CAMBIA® is contraindicated in the setting of coronary artery bypass graft (CABG) surgery.</li>
                    </ul>
                </div>

                <div style="width:50%; float:right;">
                    <h5>Addiction, Abuse, and Misuse</h5>
                    <ul>
                        <li>Butrans® exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which
                            can lead to overdose and death. Assess each patient’s risk prior to prescribing Butrans, and
                            monitor all patients regularly for the development of these behaviors and conditions <span>[see Warnings and Precautions (5.1) and Overdosage (10)].</span>                            </li>
                        <li>CAMBIA® is contraindicated in the setting of coronary artery bypass graft (CABG) surgery.</li>
                    </ul>
                    <h5>Addiction, Abuse, and Misuse</h5>
                    <ul>
                        <li>Butrans® exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which
                            can lead to overdose and death. Assess each patient’s risk prior to prescribing Butrans, and
                            monitor all patients regularly for the development of these behaviors and conditions <span> [see Warnings and Precautions (5.1) and Overdosage (10)].</span>                            </li>
                        <li>CAMBIA® is contraindicated in the setting of coronary artery bypass graft (CABG) surgery.</li>
                    </ul>
                </div>
            </div>
            <!-- Warning Box End -->
            <!-- Content Start -->
            <div class="content">
                <p class="pls_read">Please read accompanying Full Prescribing Information, including Boxed Warning above.</p>
                <p class="pls_read_body">SOURCE: All prescriptions data from IMS Health XponentTM PlanTrakTM; Commercial and Medicaid co-pay data
                    calculated from IMS Health Formulary Impact AnalyzerTM; Medicare co-pay data calculated from CMS. Formulary
                    data from Managed Markets Insight & Technology, LLC, database as of [Month Year].</p>

            </div>
            <!-- Content Start -->

            <div class="footer">
                <img src="/img/logo_footer.png" title="Purdue Logo" width="60" style="float:left; margin-right:15px;" />
                <p class="copyright">©2017 Purdue Pharma L.P., Stamford, CT 06901-3431</p>

                <div style="float:right;width:200px; line-height: 30px;">
                    <p style=" font-size:10pt;color:#005cab; float:left;">www.OxyContin.com</p>
                    <p style="font-family:arial; color:#000000; font-size:8pt; margin-left:15pt; float:right;">MR-01486</p>
                </div>
            </div>
        </div>
        <!-- mid-container Start -->
        <!-- Footer End -->

    </div>
    <!-- Container End -->
</body>`;
    return markup;
  },
  Hysingla: selectedPlans => {
    const markup = `<body>
      <div class="container">
          <!-- Container Start -->
          <!-- mid-container Start -->
          <div class="mid_container">
              <!-- Header Start -->
              <div class="header">
                  <img src="/img/logo_Hysingla.png" alt="Logo" title="Logo" width="180" style="margin-left:225px;" />
  
                  <div class="title">
                      <p>This formulary information <br>is prepared for ${sessionStorage.getItem(
                        "PrescriberName"
                      )}, MD.</p>
                  </div>
              </div>
              <!-- Header End -->
              <!-- Message Start -->
              <div class="message">
                  <p>${sessionStorage.getItem("headerMessage")}</p>
              </div>
              <!-- Message End -->
              <!-- Table Start -->
              <p class="table_heading">This includes patients enrolled in the following:</p>
              <div class="datagrid">
                  <table>
                      <thead>
                          <tr>
                              <th>Channel</th>
                              <th>Plan Name</th>
                              <th>Formulary Status</th>
                          </tr>
                      </thead>
  
                      <tbody>
                      ${selectedPlans
                        .map(
                          x =>
                            `<tr>
                            <td>${x.BenType}</td>
                            <td>${x.PlanName}</td>
                            <td>${x.Tier}</td>
                          </tr>`
                        )
                        .join("")}
                      </tbody>
                  </table>
              </div>
              <!-- Table End -->
  
              <p class="inclusion_head">Inclusion on formulary does not imply superior clinical efficacy or safety.</p>
              <p class="inclusion_body">Please note that formularies are subject to change. Please check with the health plan directly to confirm coverage
                  for individual patients. Patient costs may vary among plans.</p>
              <p class="inclusion_body">Preferred represents available on formulary at the lowest branded co-pay. PDL represents on the Preferred Drug
                  List.</p>
              <p class="inclusion_body">i. Computed as patient prescriptions that can be filled with no prior authorization or step edits for Butrans®
                  divided by the total prescriptions filled in the area over a three month period.</p>
              <p class="inclusion_body">ii. Only plans with average co-pays for Butrans® that are [CO-PAY THRESHOLD] or less are displayed. The plans’
                  co-pay ranges represent the 25th percentile cost up to the 75th percentile cost. Some patients may experience
                  co-pays higher than reflected in the message.</p>
  
              <!-- Warning Box Start -->
              <div class="warning_content">
                  <h4>WARNING: ADDICTION, ABUSE and MISUSE; LIFE-THREATENING RESPIRATORY DEPRESSION; ACCIDENTAL EXPOSURE; NEONATAL
                      OPIOID WITHDRAWAL SYNDROME; and RISKS FROM CONCOMITANT USE WITH BENZODIAZEPINES OR OTHER CNS DEPRESSANTS
                      </h4>
  
                  <div style="width:50%; float:left;">
                      <h5>Addiction, Abuse, and Misuse</h5>
                      <ul>
                          <li>Butrans® exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which
                              can lead to overdose and death. Assess each patient’s risk prior to prescribing Butrans, and
                              monitor all patients regularly for the development of these behaviors and conditions <span>[see Warnings and Precautions (5.1) and Overdosage (10)].</span>                            </li>
                          <li>CAMBIA® is contraindicated in the setting of coronary artery bypass graft (CABG) surgery.</li>
                      </ul>
                      <h5>Addiction, Abuse, and Misuse</h5>
                      <ul>
                          <li>Butrans® exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which
                              can lead to overdose and death. Assess each patient’s risk prior to prescribing Butrans, and
                              monitor all patients regularly for the development of these behaviors and conditions <span> [see Warnings and Precautions (5.1) and Overdosage (10)].</span>                            </li>
                          <li>CAMBIA® is contraindicated in the setting of coronary artery bypass graft (CABG) surgery.</li>
                      </ul>
                  </div>
  
                  <div style="width:50%; float:right;">
                      <h5>Addiction, Abuse, and Misuse</h5>
                      <ul>
                          <li>Butrans® exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which
                              can lead to overdose and death. Assess each patient’s risk prior to prescribing Butrans, and
                              monitor all patients regularly for the development of these behaviors and conditions <span>[see Warnings and Precautions (5.1) and Overdosage (10)].</span>                            </li>
                          <li>CAMBIA® is contraindicated in the setting of coronary artery bypass graft (CABG) surgery.</li>
                      </ul>
                      <h5>Addiction, Abuse, and Misuse</h5>
                      <ul>
                          <li>Butrans® exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which
                              can lead to overdose and death. Assess each patient’s risk prior to prescribing Butrans, and
                              monitor all patients regularly for the development of these behaviors and conditions <span> [see Warnings and Precautions (5.1) and Overdosage (10)].</span>                            </li>
                          <li>CAMBIA® is contraindicated in the setting of coronary artery bypass graft (CABG) surgery.</li>
                      </ul>
                  </div>
              </div>
              <!-- Warning Box End -->
              <!-- Content Start -->
              <div class="content">
                  <p class="pls_read">Please read accompanying Full Prescribing Information, including Boxed Warning above.</p>
                  <p class="pls_read_body">SOURCE: All prescriptions data from IMS Health XponentTM PlanTrakTM; Commercial and Medicaid co-pay data
                      calculated from IMS Health Formulary Impact AnalyzerTM; Medicare co-pay data calculated from CMS. Formulary
                      data from Managed Markets Insight & Technology, LLC, database as of [Month Year].</p>
  
              </div>
              <!-- Content Start -->
  
              <div class="footer">
                  <img src="/img/logo_footer.png" title="Purdue Logo" width="60" style="float:left; margin-right:15px;" />
                  <p class="copyright">©2017 Purdue Pharma L.P., Stamford, CT 06901-3431</p>
  
                  <div style="float:right;width:200px; line-height: 30px;">
                      <p style="font-family:'Formata-Bold'; font-size:10pt;color:#00c4b3; float:left;">www.HysinglaER.com</p>
                      <p style="font-family:arial; color:#000000; font-size:8pt; margin-left:15pt; float:right;">MR-01486</p>
                  </div>
              </div>
          </div>
          <!-- mid-container Start -->
          <!-- Footer End -->
  
      </div>
      <!-- Container End -->
  </body>`;
    return markup;
  },
  Symproic: selectedPlans => {
    const markup = `<body>
      <div class="container">
          <!-- Container Start -->
          <!-- mid-container Start -->
          <div class="mid_container">
              <!-- Header Start -->
              <div class="header">
                  <img src="/img/logo_Symproic.png" alt="Logo" title="Logo" width="180" style="margin-left:225px; margin-top:30px;" />
  
                  <div class="title">
                      <p>This formulary information <br>is prepared for  ${sessionStorage.getItem(
                        "PrescriberName"
                      )}, MD.</p>
                  </div>
              </div>
              <!-- Header End -->
              <!-- Message Start -->
              <div class="message">
              <p>${sessionStorage.getItem("headerMessage")}</p>
              </div>
              <!-- Message End -->
              <!-- Table Start -->
              <p class="table_heading">Inclusion on formulary does not imply superior clinical efficacy or safety.</p>
              <div class="datagrid">
                  <table>
                      <thead>
                          <tr><th>Channel</th><th>Plan Name</th><th>Formulary Status</th></tr>
                      </thead>
  
                      <tbody>
                      ${selectedPlans
                        .map(
                          x =>
                            `<tr>
                            <td>${x.BenType}</td>
                            <td>${x.PlanName}</td>
                            <td>${x.Tier}</td>
                          </tr>`
                        )
                        .join("")}
                      </tbody>
                  </table>
              </div>
              <!-- Table End -->
  
              <p class="inclusion_head">Inclusion on formulary does not imply superior clinical efficacy or safety.</p>
              <p class="inclusion_body">Please note that formularies are subject to change. Please check with the health plan directly to confirm coverage for individual patients. Patient costs may vary among plans.</p>
              <p class="inclusion_body">Preferred represents available on formulary at the lowest branded co-pay. PDL represents on the Preferred Drug List.</p>
              <p class="inclusion_body">i.	Computed as patient prescriptions that can be filled with no prior authorization or step edits for Butrans® divided by the total prescriptions filled in the area over a three month period.</p>
              <p class="inclusion_body">ii.	Only plans with average co-pays for Butrans® that are [CO-PAY THRESHOLD] or less are displayed. The plans’ co-pay ranges represent the 25th percentile cost up to the 75th percentile cost. Some patients may experience co-pays higher than reflected in the message.</p>
  
              <!-- Warning Box Start -->
              <div class="warning_content">
                  <h4>WARNING: ADDICTION, ABUSE and MISUSE; LIFE-THREATENING RESPIRATORY DEPRESSION; ACCIDENTAL EXPOSURE; NEONATAL OPIOID WITHDRAWAL SYNDROME; and RISKS FROM CONCOMITANT USE WITH BENZODIAZEPINES OR OTHER CNS DEPRESSANTS </h4>
  
                  <div style="width:50%; float:left;">
                      <h5>Addiction, Abuse, and Misuse</h5>
                      <ul>
                          <li>Butrans® exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which can lead to overdose and death. Assess each patient’s risk prior to prescribing Butrans, and monitor all patients regularly for the development of these behaviors and conditions <span>[see Warnings and Precautions (5.1) and Overdosage (10)].</span> </li>
                          <li>CAMBIA® is contraindicated in the setting of coronary artery bypass graft (CABG) surgery.</li>
                      </ul>
                      <h5>Addiction, Abuse, and Misuse</h5>
                      <ul>
                          <li>Butrans® exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which can lead to overdose and death. Assess each patient’s risk prior to prescribing Butrans, and monitor all patients regularly for the development of these behaviors and conditions <span> [see Warnings and Precautions (5.1) and Overdosage (10)].</span> </li>
                          <li>CAMBIA® is contraindicated in the setting of coronary artery bypass graft (CABG) surgery.</li>
                      </ul>
                  </div>
  
                  <div style="width:50%; float:right;">
                      <h5>Addiction, Abuse, and Misuse</h5>
                      <ul>
                          <li>Butrans® exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which can lead to overdose and death. Assess each patient’s risk prior to prescribing Butrans, and monitor all patients regularly for the development of these behaviors and conditions <span>[see Warnings and Precautions (5.1) and Overdosage (10)].</span> </li>
                          <li>CAMBIA® is contraindicated in the setting of coronary artery bypass graft (CABG) surgery.</li>
                      </ul>
                      <h5>Addiction, Abuse, and Misuse</h5>
                      <ul>
                          <li>Butrans® exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which can lead to overdose and death. Assess each patient’s risk prior to prescribing Butrans, and monitor all patients regularly for the development of these behaviors and conditions <span> [see Warnings and Precautions (5.1) and Overdosage (10)].</span> </li>
                          <li>CAMBIA® is contraindicated in the setting of coronary artery bypass graft (CABG) surgery.</li>
                      </ul>
                  </div>
              </div>
              <!-- Warning Box End -->
              <!-- Content Start -->
              <div class="content">
                  <p class="pls_read">Please read accompanying Full Prescribing Information, including Boxed Warning above.</p>
                  <p class="pls_read_body">SOURCE: All prescriptions data from IMS Health XponentTM PlanTrakTM; Commercial and Medicaid co-pay data calculated from IMS Health Formulary Impact AnalyzerTM; Medicare co-pay data calculated from CMS. Formulary data from Managed Markets Insight & Technology, LLC, database as of [Month Year].</p>
  
              </div>
              <!-- Content Start -->
  
              <div class="footer">
                  <img src="/img/logo_footer.png" title="Purdue Logo" width="60" style="float:left; margin-right:15px;" />
                  <p class="copyright">©2017 Purdue Pharma L.P., Stamford, CT 06901-3431</p>
  
                  <div style="float:right;width:200px; line-height: 30px;">
                      <p style=" font-size:10pt;color:#00acbc; float:left;">www.Symproic.com</p>
                      <p style="font-family:arial; color:#000000; font-size:8pt; margin-left:15pt; float:right;">MR-01486</p>
                  </div>
              </div>
          </div>
          <!-- mid-container Start -->
          <!-- Footer End -->
  
      </div>  <!-- Container End -->
  </body>`;
    return markup;
  }
};
module.exports = {
  GeneratePdf
};
