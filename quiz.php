<?php
$name_regex = "/^[a-zA-Z\s]+$/";
$phone_regex = "/^[(][\d]{3}[)][\s]{1}[\d]{3}[-][\d]{4}$/";
$email_regex = "/^[a-zA-Z\d\._]+@[a-zA-Z\d\._]+[\.][a-zA-Z\d\.]{2,3}+$/";
$roof_regex = "/^[a-zA-Z\s\d]+$/";
$code_regex = "/^[a-zA-Z\d]{1,20}$/";

$full_name = isset($_POST['full_name']) ? $_POST['full_name'] : '';
$phone_number = isset($_POST['phone_number']) ? $_POST['phone_number'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';

$customer_state = isset($_POST['customer_state']) ? $_POST['customer_state'] : '';
$customer_roof = isset($_POST['customer_roof']) ? $_POST['customer_roof'] : '';
$customer_code = isset($_POST['customer_code']) ? $_POST['customer_code'] : '';

$full_name_error = '';
$phone_number_error = '';
$email_error = '';

$hidden_form_error = '';

if (count($_POST)) {
    $errors = 0;

    if ($full_name == '') {
        $errors++;
        $full_name_error = 'Please enter a name.';
    } else if (preg_match($name_regex, $_POST['full_name'])) {
        $full_name = $full_name;
    } else {
        $errors++;
        $full_name_error = 'Please enter a valid name, only alphabet characters allowed. Example: "John Doe"';
    }

    if ($phone_number == '') {
        $errors++;
        $phone_number_error = 'Please enter a telephone number.';
    } else if (preg_match($phone_regex, $_POST['phone_number'])) {
        $phone_number = $phone_number;
    } else {
        $errors++;
        $phone_number_error = 'Please enter a valid telephone number. Example: "+1 (123)-456-7890"';
    }

    if ($email == '') {
        $errors++;
        $email_error = 'Please enter an e-mail address.';
    } else if (preg_match($email_regex, $_POST['email'])) {
        $email = $email;
    } else {
        $errors++;
        $email_error = 'Please enter a valid email address. Example: "example@domain.com"';
    }

    if (preg_match($name_regex, $_POST['customer_state'])) {
        $customer_state = $customer_state;
    } else {
        $errors++;
    }

    if (preg_match($roof_regex, $_POST['customer_roof'])) {
        $customer_roof = $customer_roof;
    } else {
        $errors++;
    }

    if (preg_match($code_regex, $_POST['customer_code'])) {
        $customer_code = $customer_code;
    } else {
        $errors++;
    }



    if ($errors == 0) {
        $safe_name = mysqli_real_escape_string($connect, $_POST['full_name']);
        $safe_phone_number = mysqli_real_escape_string($connect, $_POST['phone_number']);
        $safe_email = mysqli_real_escape_string($connect, $_POST['email']);

        $safe_state = mysqli_real_escape_string($connect, $_POST['customer_state']);
        $safe_roof = mysqli_real_escape_string($connect, $_POST['customer_roof']);
        $safe_code = mysqli_real_escape_string($connect, $_POST['customer_code']);

        header("Location: thank_you.html");

        die();
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-1TPY0BB6V3"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-1TPY0BB6V3');
    </script>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <title>We Save On Power</title>
</head>

<body>

    <div class="flex-container quiz-body">

        <div class="tracker">
            <img src="images/tracker_0.png" id="tracker-0">
            <img src="images/tracker_1.png" id="tracker-1">
            <img src="images/tracker_2.png" id="tracker-2">
            <img src="images/tracker_3.png" id="tracker-3">
            <img src="images/tracker_4.png" id="tracker-4">
            <img src="images/tracker_5.png" id="tracker-5">
        </div>

        <div class="mobile-tracker">
            <img src="images/tracker_0_mobile.png" id="mobile-tracker-0">
            <img src="images/tracker_1_mobile.png" id="mobile-tracker-1">
            <img src="images/tracker_2_mobile.png" id="mobile-tracker-2">
            <img src="images/tracker_3_mobile.png" id="mobile-tracker-3">
            <img src="images/tracker_4_mobile.png" id="mobile-tracker-4">
            <img src="images/tracker_5_mobile.png" id="mobile-tracker-5">
        </div>

        <div class="card" id="question-1">
            <p class="question">Do you own a home?</p>
            <div class="card-content">
                <div class="icon-cotainer">
                    <img src="images/house_icon.png" alt="Black house icon." class="card-icon">
                </div>
                <div class="btn-container">
                    <div class="choice-btn">
                        <input type="image" src="images/thumbs_down_iocn.png" alt="Red thumbs down icon." id="q1-no" name="1" value="no">
                    </div>
                    <div class="choice-btn">
                        <input type="image" src="images/thumbs_up_icon.png" alt="Green thumbs up icon." id="q1-yes" name="1" value="yes">
                    </div>
                </div>
                <div class="label-container">
                    <label for="q1-no">No</label>
                    <label for="q1-yes">Yes</label>
                </div>
            </div>
        </div>

        <div class="card" id="question-2">
            <p class="question">Is your roof newer than 15 years?</p>
            <div class="card-content">
                <div class="icon-container">
                    <img src="images/roof_icon.png" alt="Black roof icon." class="card-icon">
                </div>
                <div class="btn-container">
                    <div class="choice-btn">
                        <input type="image" src="images/thumbs_down_iocn.png" alt="Red thumbs down icon." id="q2-no" name="2" value="no">
                    </div>
                    <div class="choice-btn">
                        <input type="image" src="images/thumbs_up_icon.png" alt="Green thumbs up icon." id="q2-yes" name="2" value="yes">
                    </div>
                </div>
                <div class="label-container">
                    <label for="q2-no">No</label>
                    <label for="q2-yes">Yes</label>
                </div>
            </div>
        </div>

        <div class="card" id="question-3">
            <p class="question">Is your electric bill over $100 per month?</p>
            <div class="card-content">
                <div class="icon-container">
                    <img src="images/bolt_icon.png" id="bolt" alt="Black electric bolt icon." class="card-icon">
                </div>
                <div class="btn-container">
                    <div class="choice-btn">
                        <input type="image" src="images/thumbs_down_iocn.png" alt="Red thumbs down icon." id="q3-no" name="3" value="no">
                    </div>
                    <div class="choice-btn">
                        <input type="image" src="images/thumbs_up_icon.png" alt="Green thumbs up icon." id="q3-yes" name="3" value="yes">
                    </div>
                </div>
                <div class="label-container">
                    <label for="q3-no">No</label>
                    <label for="q3-yes">Yes</label>
                </div>
            </div>
        </div>

        <div class="card" id="question-4">
            <p class="question">Is your credit score above 600?</p>
            <div class="card-content">
                <div class="icon-container">
                    <img src="images/credit_icon.png" alt="Black gauge icon." class="card-icon">
                </div>
                <div class="btn-container">
                    <div class="choice-btn">
                        <input type="image" src="images/thumbs_down_iocn.png" alt="Red thumbs down icon." id="q4-no" name="4" value="no">
                    </div>
                    <div class="choice-btn">
                        <input type="image" src="images/thumbs_up_icon.png" alt="Green thumbs up icon." id="q4-yes" name="4" value="yes">
                    </div>
                </div>
                <div class="label-container">
                    <label for="q4-no">No</label>
                    <label for="q4-yes">Yes</label>
                </div>
            </div>
        </div>

        <div class="card" id="question-5">
            <p class="question">Do you live in any of the following States?</p>
            <div class="card-content">
                <div class="icon-container">
                    <img src="images/USA_icon.png" alt="Black U.S.A icon with a question mark cut out." class="card-icon">
                </div>
                <select name="states" id="states">
                    <option value="" disabled selected>My State is:</option>
                    <option value="Arizona">Arizona</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="District of Columbia">District of Columbia</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Missouri">Missouri</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="Nevada">Nevada</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="Texas">Texas</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="NA">My state is not listed</option>
                </select>
            </div>
        </div>

        <div class="card" id="sorry-message">
            <p class="question">Sorry...</p>
            <div class="card-content">
                <div class="icon-container">
                    <img src="images/sad_face_icon.png" alt="Black sad face icon." class="card-icon">
                </div>
                <p class="card-text">Unfortunately you do not qualify for our program. Thank you for your time.</p>
            </div>
        </div>

        <div class="card" id="contact-form">
            <p class="question">We're almost there...</p>
            <div class="contact-card">
                <div id="pending">
                    <img src="images/pending_approval_icon.png" alt="Black stamp icon that says pending approval." class="card-icon">
                </div>
                <div class="form-container">
                    <p>Applicant details:</p>
                    <form method="post">
                        <input type="text" name="full_name" placeholder="Full Name" id="name">
                        <input type="text" name="phone_number" placeholder="Phone Number" id="number">
                        <input type="text" name="email" placeholder="E-mail" id="email">
                        <input type="submit" value="Submit" id="submit-btn">
                        <input type="text" name="customer_roof" id="roof-field" class="hidden-form">
                        <input type="text" name="customer_state" id="state-field" class="hidden-form">
                        <input type="text" name="customer_code" id="code-field" class="hidden-form">
                    </form>
                </div>

            </div>
        </div>

        <div class="footer">
            <p>&copy; www.wesaveonpower.com</p>
        </div>

    </div>

    <script src="js/quiz.js"></script>
</body>

</html>