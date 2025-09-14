import Event from './Event'

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 am</td>
            <Event event="Breakfast & Recovery 🥑" color="green" />
            <td></td>
            <Event event="Team Breakfast 🍳" color="green" />
            <td></td>
            <Event event="Light Jog 🏃" color="blue" />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">9 am</td>
            <td></td>
            <Event event="Training Drills ⚽" color="blue" />
            <td></td>
            <Event event="Strength Training 💪" color="pink" />
            <td></td>
            <Event event="Media Session 🎤" color="green" />
            <td></td>
          </tr>
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <td></td>
            <Event event="Tactical Meeting 📋" color="green" />
            <td></td>
            <Event event="Physio & Recovery 🧊" color="blue" />
            <td></td>
            <Event event="Family Time 👨‍👩‍👦" color="pink" />
          </tr>
          <tr>
            <td className="time">11 am</td>
            <Event event="Gym Session 🏋️" color="pink" />
            <td></td>
            <td></td>
            <td></td>
            <Event event="Media Interview 🎥" color="green" />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">12 pm</td>
            <td></td>
            <td></td>
            <Event event="Lunch 🍝" color="green" />
            <td></td>
            <td></td>
            <td></td>
            <Event event="Rest & Nap 😴" color="blue" />
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Team Training ⚽" color="blue" />
            <td></td>
            <Event event="Video Analysis 🎞️" color="pink" />
            <td></td>
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <Event event="Recovery Swim 🏊" color="blue" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Call with Family 📱" color="green" />
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <td></td>
            <Event event="Skills Training 🎯" color="blue" />
            <td></td>
            <td></td>
            <td></td>
            <Event event="Sponsor Shoot 📸" color="pink" />
          </tr>
          <tr>
            <td className="time">4 pm</td>
            <Event event="Stretch & Mobility 🤸" color="green" />
            <td></td>
            <td></td>
            <td></td>
            <Event event="Team Meeting 🗣️" color="blue" />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">5 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Dinner 🍲" color="green" />
            <td></td>
            <td></td>
            <Event event="Match Day ⚽🔥" color="pink" />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calendar
