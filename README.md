<style>
@media (max-width: 680px) {
  /* Image layout tables — stack vertically */
  table:not(:has(thead)) { display:block !important; width:100% !important; }
  table:not(:has(thead)) tr { display:block !important; }
  table:not(:has(thead)) td { display:block !important; width:100% !important; box-sizing:border-box !important; padding:6px 0 !important; }
  table:not(:has(thead)) td img { height:auto !important; max-width:100% !important; }
  /* Data tables — scroll horizontally instead */
  table:has(thead) { display:block !important; overflow-x:auto !important; -webkit-overflow-scrolling:touch !important; }
  img[width] { max-width:100% !important; }
  iframe { width:100% !important; height:240px !important; }
}
</style>

<img src="assets/4headshotasmes.png"
     alt="Headshot"
     style="float:right; width:135px; height:165px; object-fit:cover; object-position:center 20%; border-radius:10px; margin:0 0 12px 18px;">

I'm a mechanical engineering student-athlete at UC Berkeley building toward a career in hard tech. As a sophomore, I have run a full aerodynamics design-to-test pipeline on a custom blended-wing-body aircraft, built neural flight dynamics models in the Mofrad Lab, designed and CFD-validated a seed-dispersal attachment for rewilding drones, and validated thermocouple instrumentation for a hypersonic reentry payload through NASA Space Grant. I care about work that closes the loop between analysis, simulation, fabrication, and physical testing.

<p align="center"><strong>Aerospace Systems</strong> • <strong>Experimental Aerodynamics</strong> • <strong>Mechanical Design</strong> • <strong>Applied ML</strong></p>

<table style="width:100%; border-collapse:separate; border-spacing:18px 16px; table-layout:fixed;">
  <tr>
    <td style="vertical-align:top;">
      <a href="#concept-aircraft-blended-wing-body-aerodynamics">
        <img src="assets/IMG_3685 (1).jpeg"
             alt="Blended-wing-body aerodynamic validation project"
             style="width:100%; height:230px; object-fit:cover; object-position:center 40%; border-radius:12px; display:block; border:1px solid #2a3542;">
      </a>
      <p style="margin:10px 0 0 0;">
        <a href="#concept-aircraft-blended-wing-body-aerodynamics" class="card-title"><strong>Blended-Wing-Body Aerodynamics</strong></a><br>
        <span class="card-subtitle">Full design-to-test pipeline with CFD, wind tunnel data, and tuft flow visualization.</span>
      </p>
    </td>
    <td style="vertical-align:top;">
      <div class="dark-figure-frame">
        <a href="#flynet-neural-flight-dynamics-modeling">
          <img src="assets/c172flyhero.png"
               alt="FlyNet neural flight dynamics modeling"
               style="width:100%; height:230px; object-fit:cover; object-position:center 20%; border-radius:12px; display:block; border:1px solid #2a3542;">
        </a>
      </div>
      <p style="margin:10px 0 0 0;">
        <a href="#flynet-neural-flight-dynamics-modeling" class="card-title"><strong>FlyNet: Neural Flight Dynamics</strong></a><br>
        <span class="card-subtitle">Closed-loop neural flight dynamics modeling with JSBSim and PyTorch.</span>
      </p>
    </td>
  </tr>
  <tr>
    <td style="vertical-align:top;">
      <a href="#hycube-cubesat-thermal--instrumentation-payload">
        <img src="assets/HyCubeINAir.png"
             alt="HyCUBE thermal instrumentation payload"
             style="width:100%; height:230px; object-fit:cover; object-position:center 35%; border-radius:12px; display:block; border:1px solid #2a3542;">
      </a>
      <p style="margin:10px 0 0 0;">
        <a href="#hycube-cubesat-thermal--instrumentation-payload" class="card-title"><strong>HyCUBE Thermal Payload</strong></a><br>
        <span class="card-subtitle">Aerospace instrumentation, calibration, and flight operations for a reentry payload.</span>
      </p>
    </td>
    <td style="vertical-align:top;">
      <a href="#drone-seed-dispersal-attachment-native-plant-rewilding">
        <img src="assets/dronee29Cadrender.png"
     alt="Drone seed dispersal attachment CAD render"
     style="width:100%; height:230px; object-fit:contain; object-position:center center; background:#f8fafc; border-radius:12px; display:block; border:1px solid #2a3542;">
      </a>
      <p style="margin:10px 0 0 0;">
        <a href="#drone-seed-dispersal-attachment-native-plant-rewilding" class="card-title"><strong>Drone Seed Dispersal Attachment</strong></a><br>
        <span class="card-subtitle">CAD, CFD validation, DfAM, and flight-tested mechanical integration.</span>
      </p>
    </td>
  </tr>
</table>

<p align="center" style="margin: 14px 0 22px 0; color:#6b7280;"><em>Selected work in aerodynamics, aerospace instrumentation, mechanical design, and applied machine learning.</em></p>

## Explore Projects
- [Concept Aircraft: Blended-Wing-Body Aerodynamics](#concept-aircraft-blended-wing-body-aerodynamics)
- [FlyNet: Neural Flight Dynamics Modeling](#flynet-neural-flight-dynamics-modeling)
- [HyCUBE: CubeSat Thermal & Instrumentation Payload](#hycube-cubesat-thermal--instrumentation-payload)
- [Drone Seed Dispersal Attachment: Native Plant Rewilding](#drone-seed-dispersal-attachment-native-plant-rewilding)
- [Additional Projects](#additional-projects)
  - [Wind Turbine Design-Build-Test](#wind-turbine-design-build-test)
  - [Post-Stroke Imaging Triage](#post-stroke-imaging-triage)
  - [Agent-Based Biofilm Modeling](#agent-based-biofilm-modeling)
  - [Reliability-First Trading Automation](#reliability-first-trading-automation)

---

## Concept Aircraft: Blended-Wing-Body Aerodynamics

**CAD Design · SolidWorks CFD · 3D-Printed Model · Wind Tunnel Force-Balance Testing · Tuft Flow Visualization**

<p style="font-size:13px; color:#374151; margin:8px 0 18px 0;">
  <strong>AoA sweep:</strong> −2° to +20° &nbsp;·&nbsp;
  <strong>V∞:</strong> ≈ 40 mph &nbsp;·&nbsp;
  <strong>Re:</strong> ≈ 5.6 × 10⁴ &nbsp;·&nbsp;
  <strong>Testing:</strong> EWT 3-component balance &nbsp;·&nbsp;
  <strong>Blockage:</strong> 5.0%
</p>

Blended-wing-body aircraft generate lift across more of the airframe instead of concentrating lift in a conventional wing. That creates potential efficiency benefits, but it also makes stall behavior more complex. I designed a custom BWB geometry in SOLIDWORKS, characterized the pre-stall regime with CFD, fabricated a 1:1 FDM model, and ran a wind tunnel stall campaign with simultaneous force-balance and tuft flow visualization.

### Design-to-test pipeline

<p align="center">
  <img src="assets/Cadbwbsketch.png" width="28%" alt="Concept sketch">
  &nbsp;&nbsp;
  <img src="assets/BWB_Aero_CADd1.png" width="28%" alt="SolidWorks loft">
  &nbsp;&nbsp;
  <img src="assets/IMG_3685 (1).jpeg" width="28%" alt="Wind tunnel test">
</p>
<p align="center"><em>Left to right: concept sketch, SolidWorks multi-section loft, and 1:1 FDM model on the EWT three-component balance sting.</em></p>

### Wind Tunnel Stall Campaign

The tunnel campaign used a three-component force balance for normal force, axial force, and pitching moment. Data was sampled at 25 Hz, corrected with wind-off tare, and pressure-corrected at each AoA point. I extended the sweep to 20° AoA, which was 12° beyond the CFD range, to capture the full post-stall regime.

**Key results**

- Gradual stall onset confirmed at **14 to 16°**, identified by normal-force slope collapse and pitching-moment reversal.
- **Peak normal force: 3.36 N at 18°**. The post-stall drop to 3.33 N at 20° was only about 1%, which suggests progressive spanwise separation rather than a full-span stall collapse.
- CFD and tunnel normal force agreed well through the 8° pre-stall CFD range.
- **Pitching moment peaked before normal force** at 16° vs 18°, indicating an aerodynamic-center shift near stall.
- Zero-lift angle was about −1.5° to −2°, consistent with the cambered centerbody producing positive loading at zero incidence.

### Aerodynamic Data Summary

<p align="center">
  <img src="assets/bwb_cfd_sweep_plot.png" width="44%"
       alt="CFD sweep showing lift coefficient and lift-to-drag ratio versus angle of attack"
       style="border-radius:8px; border:1px solid #d1d5db; margin-right:10px;">
  <img src="assets/bwb_wind_tunnel_run4_plot.png" width="44%"
       alt="Clean Run 4 wind tunnel sweep showing normal force and pitching moment versus angle of attack"
       style="border-radius:8px; border:1px solid #d1d5db; margin-left:10px;">
</p>
<p align="center"><em>Left: pre-stall CFD sweep from −2° to 8° AoA. Right: clean Run 4 wind-tunnel sweep from −2° to 20° AoA, after the tuft-visualization run.</em></p>

### Tuft Flow Visualization: Surface Separation Sequence

Lightweight yarn tufts, roughly 7 mm long and spaced at about 12% chord, were attached to the upper surface and recorded from above at each AoA. During attached flow, the tufts stayed aligned rearward. In transitional regions, they deflected laterally. During separation, they lifted, reversed, or fluttered.

**Main finding: separation starts at the centerbody and progresses outward.** The outer panels remain partially attached after centerbody stall begins, which explains why the force curve rolls over gradually instead of collapsing suddenly.

<table style="width:100%; border-collapse:separate; border-spacing:12px 0; table-layout:fixed;">
  <tr>
    <td style="width:25%; vertical-align:top; text-align:center; border:1px solid #d1d5db; padding:10px;">
      <img src="assets/tuft_prestall.png"
           style="width:100%; height:145px; object-fit:cover; object-position:center center; border-radius:8px; display:block;"
           alt="Pre-stall: tufts flat and aligned rearward across full planform">
      <p style="font-size:12px; line-height:1.35; margin:8px 0 0 0;"><em>0 to 4°: attached flow. Tufts stream rearward across the planform.</em></p>
    </td>
    <td style="width:25%; vertical-align:top; text-align:center; border:1px solid #d1d5db; padding:10px;">
      <img src="assets/tuft_onset.png"
           style="width:100%; height:145px; object-fit:cover; object-position:center center; border-radius:8px; display:block;"
           alt="Transition: centerbody tufts curling, outer panel clean">
      <p style="font-size:12px; line-height:1.35; margin:8px 0 0 0;"><em>6 to 10°: centerbody tufts begin curling while the outer panel remains clean.</em></p>
    </td>
    <td style="width:25%; vertical-align:top; text-align:center; border:1px solid #d1d5db; padding:10px;">
      <img src="assets/tuft_stall.png"
           style="width:100%; height:145px; object-fit:cover; object-position:center center; border-radius:8px; display:block;"
           alt="Stall onset: centerbody separated, outer panel partially attached">
      <p style="font-size:12px; line-height:1.35; margin:8px 0 0 0;"><em>14 to 16°: centerbody tufts become disordered. Outer-panel tufts deflect but do not fully reverse.</em></p>
    </td>
    <td style="width:25%; vertical-align:top; text-align:center; border:1px solid #d1d5db; padding:10px;">
      <img src="assets/tuft_poststall.png"
           style="width:100%; height:145px; object-fit:cover; object-position:center center; border-radius:8px; display:block;"
           alt="Post-stall: widespread centerbody separation, wingtips persist">
      <p style="font-size:12px; line-height:1.35; margin:8px 0 0 0;"><em>18 to 20°: widespread centerbody separation. Wingtip tufts remain partially ordered.</em></p>
    </td>
  </tr>
</table>

### CFD: Pre-Stall Characterization

Steady-state laminar and turbulent SolidWorks Flow Simulation was used to sweep −2° to +8° AoA at V∞ = 40 mph. Coefficients were reported after a post-convergence averaging window and checked with mesh and domain sensitivity studies.

<p align="center">
  <img src="assets/Aero_Grid_VelX_vs_Pressure_0_4_8 (3).png" width="74%" alt="Streamwise velocity cut planes and surface pressure maps at AoA = 0°, 4°, 8°">
</p>
<p align="center"><em>Pre-stall CFD sweep: streamwise velocity cut planes and surface pressure maps at 0°, 4°, and 8° AoA.</em></p>

**Verification**

- Domain independence at α = 4°: ΔC_L = +0.17%, ΔC_D = +0.43%.
- Mesh independence at α = 4°: medium-to-fine ΔC_L ≈ 1.25%, ΔC_D ≈ 0.37%.

### Resources
- [Project Executive summary (HTML)](assets/BWB_Project_Showcase_Tufts%20%284%29.html)
- [CFD Summary (PDF)](assets/BWB_CFD_Summary_.pdf)

---
## FlyNet: Neural Flight Dynamics Modeling

**Flight Dynamics · Physics-Embedded ML · PyTorch · JSBSim · Closed-Loop Simulation · System Identification**  
*Mofrad Lab collaboration*

<p align="center">
  <img src="assets/flynet_feature_to_trajectory_loop.png" width="92%"
       alt="FlyNet closed-loop neural flight dynamics pipeline"
       style="border-radius:10px; border:1px solid #2a3542;">
</p>
<p align="center"><em>
A learned force/moment model is embedded inside rigid-body equations of motion, so evaluation happens through full closed-loop trajectory rollout rather than isolated one-step prediction.
</em></p>

I am developing and evaluating physics-embedded neural models for aircraft flight dynamics. The model learns aerodynamic force and moment terms from aircraft state and control inputs, then rolls those predictions forward through equations of motion to test whether the learned dynamics remain stable over full trajectories.

The project began as a reproduction of a published FlyNet-style architecture and has grown into a broader research pipeline for closed-loop neural system identification. My focus is on the gap between low average prediction error and reliable trajectory behavior: when small force/moment errors compound, which state channels dominate rollout failure, and how model accuracy changes across operating regimes.

<p align="center">
  <img src="assets/flynet_method_comparison_heatmap.png" width="88%"
       alt="Method comparison heatmap for neural flight dynamics rollout"
       style="border-radius:10px; border:1px solid #2a3542;">
</p>
<p align="center"><em>
Model changes do not improve every state uniformly; they shift error across translational, rotational, and attitude channels.
</em></p>

### Research Focus

- Reproducing and extending FlyNet-style physics-embedded neural flight dynamics models.
- Training neural force/moment predictors that are evaluated through closed-loop EOM integration.
- Comparing feed-forward and recurrent architectures under matched rollout conditions.
- Building diagnostics for state-channel error, regime sensitivity, and trajectory-level drift.
- Studying whether training objectives should optimize average accuracy, worst-regime behavior, or controller-relevant performance.

### What I Built

| Area | Contribution |
|---|---|
| Simulation data pipeline | Generated trimmed aircraft trajectories and maneuver datasets using JSBSim |
| Feature engineering | Implemented normalized state/control features and second-order feature expansion |
| Neural dynamics model | Built feed-forward and recurrent PyTorch models for force/moment prediction |
| Closed-loop training | Trained models through trajectory-level output-error refinement |
| Evaluation | Measured rollout RMSE across translational velocity, angular rate, and attitude channels |
| Diagnostics | Produced plots for channel trade-offs, regime sensitivity, and closed-loop failure modes |

<p align="center">
  <img src="assets/flynet_regime_summary.png" width="88%"
       alt="Operating-regime sensitivity plot for neural flight dynamics"
       style="border-radius:10px; border:1px solid #2a3542;">
</p>
<p align="center"><em>
A major theme of the work is that average rollout error can hide regime-specific failures, which matters for aircraft models intended for planning or control.
</em></p>

### Key Takeaways

- Closed-loop evaluation is substantially more informative than one-step prediction error for learned flight dynamics.
- Feed-forward models can become stable under trajectory-level refinement, but stability depends strongly on the training objective.
- Recurrent memory can improve some state channels while degrading others, so architecture alone is not a complete solution.
- Regime-specific and channel-specific diagnostics are necessary because pooled RMSE can hide important failure modes.
- The long-term research direction is robust neural flight dynamics: models that are reliable across operating conditions, not just accurate on average.

### Controller-Relevant Direction

The next stage of this work connects learned dynamics accuracy to downstream control relevance. Instead of treating rollout RMSE as the only endpoint, I am exploring how learned models should be validated for use in tracking, planning, or model-predictive control loops.

<p align="center">
  <iframe width="52%" height="260"
    src="https://www.youtube.com/embed/RBWWbZS1y6c"
    frameborder="0"
    allowfullscreen
    style="border-radius:12px; border:1px solid #2a3542;">
  </iframe>
</p>
<p align="center"><em>Small rollout/demo video from the closed-loop modeling pipeline.</em></p>

### Tools

`Python` · `PyTorch` · `JSBSim` · `NumPy` · `Matplotlib` · `Flight dynamics` · `Closed-loop simulation` · `System identification`

## HyCUBE: CubeSat Thermal & Instrumentation Payload

**Aerospace Instrumentation · Sensor Calibration · Thermal Validation · Flight Operations**  
*NASA Space Grant, hypersonic reentry payload support*

<p align="center">
  <img src="assets/HyCubeINAir.png" width="46%" alt="HyCUBE payload in high-altitude flight" style="border-radius:10px; border:1px solid #2a3542;">
  <img src="assets/hycube_mission_graphic.webp" width="46%" alt="HyCUBE mission phases" style="border-radius:10px; border:1px solid #2a3542;">
</p>
<p align="center"><em>HyCUBE payload context: high-altitude flight imagery and mission phases for a ballistic reentry experiment.</em></p>

<p align="center">
  <img src="assets/hycube_balloon_preflight.jpeg" width="46%"
       alt="Pre-launch payload integration before balloon release"
       style="border-radius:10px; border:1px solid #2a3542;">
  <img src="assets/hycube_calibration_rig.jpeg" width="46%"
       alt="Thermocouple calibration rig with controlled heat source and measurement circuit"
       style="border-radius:10px; border:1px solid #2a3542;">
</p>
<p align="center"><em>Left: payload integration before balloon release. Right: thermocouple calibration rig with a controlled heat source and measurement circuit.</em></p>

Reliable temperature sensing is critical for flight-readiness decisions. I built a thermocouple calibration and validation workflow for HyCUBE, converting raw measurement logs into calibration fits, agreement plots, and reusable figures for technical review.

**Highlights**

- Built a calibration workflow for thermocouple instrumentation used in flight-readiness review.
- Implemented cold-junction compensation and regression-based sensitivity estimates.
- Compared sensor behavior against a reference measurement using parity and agreement plots.
- Produced review-ready PNG exports, summary tables, and validation figures.
- Supported high-altitude balloon operations, including payload integration, ground-station setup, monitoring, recovery, and post-flight data validation.

<p align="center">
  <img src="assets/hycube_validation_2up.png" width="70%" alt="Parity plot and temperature error vs reference">
</p>
<p align="center"><em>Validation output: thermocouple temperature vs reference and error vs reference temperature.</em></p>

<p align="center">
  <img src="assets/hycube_agreement_2up.png" width="70%" alt="Agreement and sensitivity plots">
</p>
<p align="center"><em>Agreement and sensitivity plots used to compare thermocouple behavior across probe configurations.</em></p>

---

## Drone Seed Dispersal Attachment: Native Plant Rewilding

**CAD Design · DfAM · CFD Aerodynamic Validation · Mechanical Integration · Flight Test**

<p style="font-size:13px; color:#374151; margin:8px 0 18px 0;">
  <strong>CFD condition:</strong> V∞ = 15 mph forward flight &nbsp;·&nbsp;
  <strong>Drag:</strong> 3.94 N &nbsp;·&nbsp;
  <strong>Lift:</strong> 0.926 N &nbsp;·&nbsp;
  <strong>Side force:</strong> −0.044 N &nbsp;·&nbsp;
  <strong>Build:</strong> ABS printed enclosure
</p>

<table style="width:70%; margin:0 auto; border-collapse:separate; border-spacing:14px 0; table-layout:fixed;">
  <tr>
    <td style="width:50%; vertical-align:middle; text-align:center;">
      <img src="assets/dronee29Cadrender.png"
           alt="CAD render of drone seed dispersal attachment mounted under quadcopter"
           style="width:100%; height:220px; object-fit:contain; background:#ffffff; border-radius:12px; border:1px solid #2a3542; display:block;">
    </td>
    <td style="width:50%; vertical-align:middle; text-align:center;">
      <img src="assets/drone_flight_photo.jpg"
           alt="Indoor flight test of the drone with the seed dispersal attachment mounted"
           style="width:100%; height:220px; object-fit:cover; object-position:center center; border-radius:12px; border:1px solid #2a3542; display:block;">
    </td>
  </tr>
</table>
<p align="center"><em>Left: CAD integration of the seed-dispersal attachment. Right: indoor flight test with the attachment mounted on the quadcopter.</em></p>

In a team design project, I helped design and build a seed-dispersal attachment for a quadcopter intended for native plant rewilding. The attachment uses a gravity-fed hopper and motor-driven dispersal mechanism in an ABS printed enclosure. My main contribution was the aerodynamic and mechanical integration work: CFD validation, external geometry refinement, and placement decisions to reduce drag and avoid yaw imbalance.

**Engineering focus**

- Ran a 15 mph forward-flight CFD study to quantify drag, lift, and side force.
- Confirmed near-zero side force, indicating the attachment geometry should not introduce major yaw-control issues.
- Added leading-edge and corner fillets to reduce separation and drag.
- Reviewed DfAM print orientation decisions to improve surface quality on aerodynamic faces.
- Supported final flight testing with the attachment mounted and loaded.

### CFD Aerodynamic Validation

<table style="width:70%; margin:0 auto; border-collapse:separate; border-spacing:14px 0; table-layout:fixed;">
  <tr>
    <td style="width:50%; vertical-align:middle; text-align:center;">
      <img src="assets/e29DronePressure.png"
           alt="Static pressure plot for the drone seed dispersal attachment at 15 mph forward flight"
           style="width:100%; height:220px; object-fit:contain; background:#ffffff; border-radius:8px; border:1px solid #2a3542; display:block;">
    </td>
    <td style="width:50%; vertical-align:middle; text-align:center;">
      <img src="assets/e29dronevel.png"
           alt="Velocity plot for the drone seed dispersal attachment at 15 mph forward flight"
           style="width:100%; height:220px; object-fit:contain; background:#ffffff; border-radius:8px; border:1px solid #2a3542; display:block;">
    </td>
  </tr>
</table>
<p align="center"><em>Static pressure result, left, and velocity field result, right, from the 15 mph forward-flight CFD study.</em></p>

| Result | Value | Engineering meaning |
|--------|-------|---------------------|
| Drag force | 3.94 N | Primary flight-performance cost |
| Lift force | +0.926 N | Small positive lift partially offsets attachment weight |
| Side force | −0.044 N | Symmetric geometry, low yaw disturbance |

The CFD confirmed drag as the main performance concern and guided the final external geometry. The project connects mechanical design, manufacturability, and flight behavior rather than treating the attachment as only a printed container.

---

## Additional Projects

Smaller projects included for range and technical completeness. These sit below the core aerospace and aerodynamics projects so the page stays focused on the roles I am currently targeting.

### Wind Turbine Design-Build-Test

**Rapid Prototyping · Wind-Tunnel Testing · Power Characterization · Structural Review**

In a four-person team project, we designed, built, and tested a small wind turbine under manufacturability and performance constraints, and our final design ranked **#1 of 40 teams** in measured electrical power output. I focused on measurement, power characterization, blade concept research, and verification review, converting voltage and current data into comparable power results to guide iteration while also reviewing structural sanity checks on the design.

<table style="width:76%; margin:0 auto; border-collapse:separate; border-spacing:12px 0; table-layout:fixed;">
  <tr>
    <td style="width:28%; vertical-align:middle; text-align:center;">
      <img src="assets/windturbine_power_vs_current.png"
           alt="Power vs current measurement curve"
           style="width:100%; height:180px; object-fit:contain; background:#ffffff; border-radius:8px; display:block;">
    </td>
    <td style="width:30%; vertical-align:middle; text-align:center;">
      <img src="assets/windturbine_test_setup.jpg"
           alt="Wind turbine test setup"
           style="width:100%; height:180px; object-fit:cover; object-position:center 45%; border-radius:8px; border:1px solid #2a3542; display:block;">
    </td>
    <td style="width:42%; vertical-align:middle; text-align:center;">
      <img src="assets/windturbine_fea_triptych.png"
           alt="FEA results showing displacement, stress, and factor of safety"
           style="width:100%; height:180px; object-fit:contain; background:#ffffff; border-radius:8px; display:block;">
    </td>
  </tr>
</table>
<p align="center"><em>Measured power curve, wind-tunnel-style test setup, and structural FEA sanity-check results.</em></p>

### Post-Stroke Imaging Triage

**Medical Imaging · Applied Deep Learning · CT Preprocessing · Interpretability**  
*Mofrad Lab collaboration*

Built a reproducible slice-level baseline for intracranial hemorrhage detection on non-contrast head CT and ran a controlled initialization study comparing scratch training, ImageNet pretraining, and CT-native JEPA-style self-supervised pretraining. I built the full preprocessing and training pipeline, implemented class-imbalance handling and stable fine-tuning, and found that the best JEPA-10k model reached validation ROC-AUC of about 0.846 with sensitivity of about 0.80 and specificity of about 0.706 at a 0.5 threshold.

<p align="center">
  <img src="assets/gradcam_grid_imagenet_maskedcrop%20(1).png" width="52%" alt="Grad-CAM visualization grid for head CT hemorrhage model" style="border-radius:8px; border:1px solid #2a3542;">
</p>

### Agent-Based Biofilm Modeling

**Python · MESA · Agent-Based Simulation · Parametric Design Screening**  
*Co-developed with a senior mechanical engineering student*  
[Full technical report (PDF)](assets/biofilm_abm_report.pdf)

Built a parametric agent-based model in MESA to simulate bacterial biofilm formation on catheter surfaces, including planktonic motion, probabilistic attachment, EPS secretion, nutrient-driven growth, and shear-driven detachment. I used the model to run parameter sweeps over roughness, coating strength, and shear flow, compare five candidate material surfaces under stochastic replicates, and frame the project as a low-cost pre-prototyping screen for medical-device surface design before physical testing.

<p align="center">
  <img src="assets/ABMHeatMap_forport.png" width="58%" alt="Agent-based biofilm modeling heatmap" style="border-radius:10px; border:1px solid #2a3542;">
</p>
<p align="center"><em>Parameter sweep heatmap from the agent-based biofilm model, used to compare how surface and flow conditions influence attachment behavior.</em></p>


### Reliability-First Trading Automation

**Systems Engineering · Deterministic State Machine · Safety Checks · Audit Logs**

Built a reliability-first paper-trading automation system that observes leveraged S&P 500 ETFs at the U.S. market open, makes a deterministic leader decision, and executes one cash-only order with explicit safety checks. I framed the project as a reliability engineering exercise focused on predictable behavior under imperfect market data, API failures, and account constraints, with fail-closed logic, traceable state transitions, and audit-style logs for each exit path.



---

## Contact

I'm always happy to connect with researchers, engineers, students, and teams interested in aerospace systems, instrumentation, mechanical design, and applied machine learning.

[LinkedIn](https://www.linkedin.com/in/kevin-armstrong-ii-647125319/)  
**Email:** kevarm2028@berkeley.edu
