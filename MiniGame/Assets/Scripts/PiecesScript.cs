using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PiecesScript : MonoBehaviour
{
    public bool Selected = false;
    public bool inRightPosition = false;
    private Vector3 RightPosition;
    // Start is called before the first frame update
    void Start()
    {
        RightPosition = transform.position;
        transform.position = new Vector3(Random.Range(5, 13), Random.Range(3, -9));
    }

    // Update is called once per frame
    void Update()
    {
        if(Vector3.Distance(transform.position, RightPosition) < 0.5f)
        {
            if (!Selected)
            {
                transform.position = RightPosition;
                inRightPosition = true;
            }
        }
    }
}
