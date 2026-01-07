# Engineering Portfolio

Mechanical Engineering student focused on aerospace systems, thermal modeling, and applied machine learning.  
Hands-on experience across CubeSat payloads, UAV design, and medical image analysis.

---

## Blended-Wing-Body CFD — Concept-to-Coefficients (SOLIDWORKS Flow Simulation 2024)

<p align="center">
  <a href="assets/BWB%20Executive%20Summary.pdf">
    <img src="assets/BWB_Plane_RelPresIso4deg.png" width="80%">
  </a>
</p>

<p align="center">
  <em>Relative static pressure on the BWB upper surface (α = 4°, V∞ ≈ 40 mph).</em><br>
  📄 <a href="assets/BWB%20Executive%20Summary.pdf"><b>Open the executive summary (PDF)</b></a>
</p>

**What this is:** Concept-level aerodynamic characterization of a blended-wing-body (BWB) using steady-state CFD in SOLIDWORKS Flow Simulation 2024, including verification checks (convergence, domain independence, mesh sensitivity) and an AoA sweep at ~40 mph.

**Key outputs:** Lift coefficient (CL), drag coefficient (CD), lift-to-drag ratio (L/D), plus qualitative flow interpretation from streamwise velocity (Vx) cuts and surface relative pressure / Cp scaling.

- **AoA sweep:** −2°, 0°, 2°, 4°, 6°, 8° at **V∞ ≈ 40 mph**
- **Verification workflow:** convergence (+100-iteration stability window), domain sensitivity, mesh sensitivity
- **Post-processing standard:** consistent views + fixed legend scales for clean visual comparisons

**Report**
- 📄 **BWB Executive Summary (PDF):** [Open PDF](assets/BWB%20Executive%20Summary.pdf)

### Selected Figures

<p align="center"><b>Streamwise velocity montage (Vx)</b></p>
<p align="center">
  <img src="assets/13CombinedVelX_STACKED_0_4_8_PORTFOLIO%20(1).png" width="62%">
</p>

<p align="center"><b>Surface relative pressure montage (0°, 4°, 8°)</b></p>
<p align="center">
  <img src="assets/CombinedRelPres_montage_0_4_8_PORTFOLIO.png" width="78%">
</p>

<p align="center"><b>Mesh sensitivity (α = 4° baseline)</b></p>
<p align="center">
  <img src="assets/ES3_mesh_sensitivity.png" width="68%">
</p>


---

<hr style="
border: none;
height: 1px;
background: linear-gradient(to right, transparent, #444, transparent);
margin: 50px 0;
">

<!-- HY C U B E -->
<div style="max-width: 1040px; margin: 0 auto;">

  <!-- Centered title -->
  <div style="text-align: center;">
    <h2 style="display: inline-flex; align-items: center; justify-content: center; gap: 10px; margin: 0;">
      HyCUBE: CubeSat Thermal &amp; Instrumentation Payload
      <img src="assets/NASA_MN_SpaceGrantLogo.jpg" width="28" style="opacity: 0.9;">
    </h2>

    <p style="margin: 8px 0 0 0; color: #b0b0b0; font-style: italic;">
      NASA’s Minnesota Space Grant Consortium &amp; University of Minnesota SmallSat Program
    </p>

    <p style="margin: 10px 0 0 0; color:#9ca3af;">
      Role — <strong>Aerospace Systems Research Intern</strong> (Mechanical / Thermal Engineering — Instrumentation &amp; Data)
    </p>
  </div>

  <!-- Two-image overview row (ONLY these two) -->
  <div style="
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    margin: 16px 0 10px 0;
    flex-wrap: wrap;
  ">
    <img src="assets/HyCubeINAir.png" style="width: 48%; min-width: 320px; border-radius: 10px;">
    <img src="assets/hycube_mission_graphic.webp" style="width: 48%; min-width: 320px; border-radius: 10px;">
  </div>

  <!-- Callout -->
  <div style="
    margin: 14px auto 18px auto;
    padding: 12px 16px;
    background: #111;
    border-left: 3px solid #7dd3fc;
    color: #cbd5e1;
    font-size: 1.0rem;
    line-height: 1.65;
    border-radius: 10px;
  ">
    <strong>Payload integration + validation pipeline.</strong>
    Built an end-to-end experiment and analysis workflow to quantify thermocouple sensitivity and measurement agreement versus a reference thermometer
    (with cold-junction compensation), supporting sensor selection and flight-readiness checks for HyCUBE testing (including high-altitude balloon operations).
  </div>

  <!-- Main description (less tight) -->
  <p style="line-height: 1.75; margin: 0 0 14px 0; color: #e5e7eb;">
    Designed and executed thermocouple qualification experiments and produced decision-ready calibration outputs.
    The workflow converts raw voltage/temperature measurements into regression-based fits (with confidence bounds) and validates agreement using
    parity + Bland–Altman methods—making results reviewable, reproducible, and ready for documentation/design reviews.
  </p>

  <!-- Results snapshot -->
  <h4 style="margin-top: 18px; border-bottom: 1px solid #333; padding-bottom: 6px; color: #e5e7eb;">
    Results Snapshot (current dataset)
  </h4>

  <ul style="line-height: 1.75; margin: 12px 0 18px 18px; color: #e5e7eb;">
    <li>
      <strong>Estimated sensitivity (slope):</strong>
      19 in ≈ 44.51 µV/°C (R² ≈ 0.499),
      25 in ≈ 33.84 µV/°C (R² ≈ 0.377),
      30 in ≈ 45.05 µV/°C (R² ≈ 0.542)
    </li>
    <li>
      <strong>Agreement vs reference:</strong>
      overall bias ≈ 0.00°C with limits of agreement ≈ ±3.60°C (Bland–Altman)
    </li>
    <li>
      <strong>Deliverable:</strong> calibration summary + figures exported as PNGs suitable for reports and review decks
    </li>
  </ul>

  <!-- Figures -->
  <h4 style="margin-top: 20px; border-bottom: 1px solid #333; padding-bottom: 6px; color: #e5e7eb;">
    Selected Figures
  </h4>

  <p style="color:#9ca3af; margin: 12px 0 8px 0;">
    <strong>Centered calibration fits + 95% confidence bands (shared axes)</strong>
  </p>
  <div style="text-align: center; margin: 0 0 12px 0;">
    <img src="assets/hycube_centered_fit_ci_shared_axes.png" style="width: 88%; max-width: 980px; border-radius: 10px;">
  </div>

  <!-- Two-up validation row -->
  <p style="color:#9ca3af; margin: 16px 0 8px 0;">
    <strong>Validation views (parity + error)</strong>
  </p>
  <div style="
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 10px;
  ">
    <img src="assets/hycube_parity_plot.png" style="width: 47%; min-width: 320px; border-radius: 10px;">
    <img src="assets/hycube_error_vs_reference.png" style="width: 47%; min-width: 320px; border-radius: 10px;">
  </div>

  <!-- Two-up agreement + sensitivity row -->
  <p style="color:#9ca3af; margin: 16px 0 8px 0;">
    <strong>Agreement + sensitivity</strong>
  </p>
  <div style="
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 8px;
  ">
    <img src="assets/hycube_bland_altman_all.png" style="width: 47%; min-width: 320px; border-radius: 10px;">
    <img src="assets/hycube_sensitivity_vs_length.png" style="width: 47%; min-width: 320px; border-radius: 10px;">
  </div>

  <!-- Contributions -->
  <h4 style="margin-top: 18px; border-bottom: 1px solid #333; padding-bottom: 6px; color: #e5e7eb;">
    Key Contributions
  </h4>

  <ul style="line-height: 1.75; margin: 12px 0 0 18px; color: #e5e7eb;">
    <li>Designed thermocouple calibration experiments and produced decision-ready plots for sensor selection</li>
    <li>Implemented cold-junction compensation and regression-based calibration with confidence bounds</li>
    <li>Validated measurement behavior with parity + Bland–Altman agreement (bias and limits-of-agreement)</li>
    <li>Automated analysis outputs (tables + PNG exports) to keep results reproducible and reviewable</li>
    <li>Supported flight-readiness testing workflows, including high-altitude balloon operations and post-flight validation</li>
  </ul>

</div>

---

## StrokeNet — Hemorrhage Detection from Non-Contrast Head CT (Lab-Mentored ML Project)

<p style="margin-top: -8px; color: #6b7280; font-style: italic;">
UC Berkeley (Mofrad Lab context) • Medical Imaging + Applied Deep Learning • Interpretability + Validation Focus
</p>

<p align="center">
  <img src="assets/gradcam_grid_imagenet_maskedcrop.png" width="86%">
</p>

> **Model interpretability (Grad-CAM).**  
> Attention maps are used as a validation tool: do predictions rely on anatomically plausible regions (brain/bleed) rather than skull edges or background artifacts?

---

### What this is
Non-contrast head CT is a frontline imaging modality for suspected intracranial hemorrhage.  
This project builds a **reproducible baseline** for binary hemorrhage detection and, critically, evaluates whether model behavior is **clinically plausible** using interpretability, not accuracy alone.

I developed this work in a lab-mentored setting with iterative feedback from graduate researchers (design reviews, experimental direction, and evaluation framing). After an initial supervised baseline, I independently read and implemented a student-teacher self-supervision approach from a recent paper discussed with the team, then tested whether CT-native pretraining meaningfully shifts performance or operating characteristics.

---

### Methods (high-level)
- **Data pipeline:** DICOM → Hounsfield Units → brain windowing (W=80/L=40) → normalization → 224×224 tensors  
- **Model:** ResNet-18 binary classifier  
- **Training regimes compared:**
  1. **Scratch** (random initialization)  
  2. **ImageNet initialization** (transfer learning baseline)  
  3. **CT-native self-supervision (JEPA-style)** student/teacher pretraining on unlabeled slices, then fine-tuned for hemorrhage detection
- **Validation focus:** ROC-AUC + sensitivity/specificity trade-offs + interpretability checks (Grad-CAM)

---

### Results snapshot (held-out validation)
<p align="center">
  <img src="assets/roc_overlay_init_compare.png" width="78%">
</p>

- **Best overall discrimination:** ImageNet-initialized ResNet-18 achieved **ROC-AUC ≈ 0.884** on a held-out validation split.  
- **Operating point example (threshold = 0.5):** **Sensitivity ≈ 0.775**, **Specificity ≈ 0.838** (confusion matrix below).  
- **Self-supervision insight:** JEPA-style CT pretraining shifted the **sensitivity/specificity trade-off** (more sensitive in some runs, less specific), consistent with the practical observation that SSL methods may not outperform strong CNN baselines “out of the box,” but can change *how* the model makes errors.

<p align="center">
  <img src="assets/confusion_matrices_init_compare.png" width="78%">
</p>

---

### What I contributed (engineering signal)
- Built an end-to-end, reproducible **CT preprocessing + training pipeline** (DICOM handling, HU conversion, windowing, augmentation, stratified splits)
- Implemented **balanced training** for class imbalance (weighted sampling / loss weighting) and stable fine-tuning (separate LR for trunk vs head)
- Designed evaluation that goes beyond accuracy: **ROC-AUC + sensitivity/specificity + threshold behavior**
- Developed **portfolio-grade interpretability visualizations** (Grad-CAM TP/FP/FN/TN grid with head-masked cropping to avoid background artifacts)
- Independently implemented and tested a **student-teacher self-supervision (JEPA-style)** pretraining experiment on unlabeled CT slices and compared initialization strategies

---

### Why this matters (plain English)
In high-stakes medical imaging, a model can score well while learning shortcuts (scanner artifacts, skull boundaries, black padding).  
This project emphasizes **trustworthy evaluation**: comparing training regimes *and* checking whether the model’s “attention” is plausibly aligned with anatomy—an important step toward models that can be validated and improved for real clinical workflows.

---

### Repo contents
- `notebooks/` — Colab notebook with full pipeline (data understanding → training → evaluation → Grad-CAM)
- `assets/` — exported figures used in this README (ROC, confusion matrices, Grad-CAM grid)
- `checkpoints/` (optional) — saved model weights for reproducible plotting without retraining

---

### Notes on scope & next steps
This is a **slice-level baseline** built for research iteration and interpretability, not a deployed diagnostic tool.  
Next improvements I would pursue:
- patient-level aggregation across slices (study-level decisions)
- stronger CT-native pretraining (larger unlabeled pool, better augmentations, longer SSL schedule)
- subgroup/generalization checks (scanner/site shifts) and calibration


---

## Blended Wing Body UAV — <em>Aquila-S</em>

<p style="margin-top: -8px; color: #6b7280; font-style: italic;">
Aerodynamics & Vehicle Design
</p>

<p align="center">
  <img src="assets/Figure4_FlowView.jpg" width="70%">
</p>

> **Flow-field visualization.**  
> Surface pressure and velocity distributions used to evaluate lift generation and aerodynamic efficiency.

<div style="display: flex; gap: 20px; justify-content: center;">
<img src="assets/CLvA_BWB.png" width="35%">
<img src="assets/Cm_vs_aplot.jpg" width="35%">
</div>

> **Stability characterization.**  
> Lift and pitching-moment trends used to assess trim behavior and longitudinal stability.

Designed and analyzed a custom blended wing body UAV for aerodynamic efficiency and stability studies.

### Key Contributions
- Blended-wing geometry development and refinement
- Aerodynamic analysis of lift, moment, and flow behavior
- Stability assessment via pitching moment trends
- Integration of analysis results into design iteration
